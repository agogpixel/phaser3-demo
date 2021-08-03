/**
 *
 */
type LightpostFacing = 'left' | 'right';

/**
 *
 */
export class Lightpost extends Phaser.GameObjects.Image {
  /**
   *
   */
  public static readonly key = 'lightpost';

  /**
   *
   */
  private static readonly textureKey = 'lightpost';

  /**
   *
   */
  private static readonly tilemapKey = 'lightpost';

  /**
   *
   */
  private static readonly tilemapLayerID = 'layer1';

  /**
   *
   */
  private static readonly tilemapLayerPropertyName = 'frames';

  /**
   *
   */
  private static readonly tilesetName = 'roguelikeCity_transparent';

  /**
   *
   */
  private static readonly originLeftFacing = new Phaser.Math.Vector2(0.75, 1);

  /**
   *
   */
  private static readonly originRightFacing = new Phaser.Math.Vector2(0.25, 1);

  /**
   *
   */
  private static readonly lightbarOriginLeftFacing = new Phaser.Math.Vector2(0.125, 0.085);

  /**
   *
   */
  private static readonly lightbarOriginRightFacing = new Phaser.Math.Vector2(0.5625, 0.085);

  /**
   *
   */
  private static readonly lightbarDimensions = new Phaser.Math.Vector2(5, 1);

  /**
   *
   */
  private static readonly lightbarCastForegroundMagnitude = 24;

  /**
   *
   * @param config
   * @param addToScene
   * @returns
   */
  public static readonly creator = function creator(
    config: Phaser.Types.GameObjects.GameObjectConfig & { facing: LightpostFacing },
    addToScene?: boolean
  ): Lightpost {
    const lightpost = new Lightpost(this.scene, 0, 0, config.facing);

    if (addToScene !== undefined) {
      config.add = addToScene;
    }

    Phaser.GameObjects.BuildGameObject(this.scene, lightpost, config);

    return lightpost;
  };

  /**
   * Generate lightpost texture sheet, with indexed frames, from tilemap & tileset data. Assumes a custom property
   * 'frames' exists on the tilemap layer. The value of this property must be a json string mapping facings 'left' &
   * 'right' to their appropriate texture frame dimensions: [x,y,width,height];
   *
   * @param scene
   * @returns
   */
  public static generateTexture(scene: Phaser.Scene): Phaser.Textures.Texture {
    const tilemap = scene.make.tilemap({ key: Lightpost.tilemapKey });
    const tileset = tilemap.addTilesetImage(Lightpost.tilesetName);

    const layer = tilemap.createLayer(Lightpost.tilemapLayerID, tileset);
    scene.children.remove(layer);

    const renderTexture = scene.make.renderTexture({ x: 0, y: 0, width: layer.width, height: layer.height }, false);
    const texture = renderTexture.draw(layer).saveTexture(Lightpost.textureKey);

    const frames: Record<string, [number, number, number, number]> = JSON.parse(
      layer.layer.properties.find((value) => value['name'] === Lightpost.tilemapLayerPropertyName)['value']
    );

    for (const [name, [x, y, w, h]] of Object.entries(frames)) {
      texture.add(name, 0, x, y, w, h);
    }

    tilemap.destroy();
    renderTexture.destroy();

    return texture;
  }

  /**
   *
   * @param x
   * @param y
   * @param facing
   * @returns
   */
  public static readonly factory = function factory(x: number, y: number, facing: LightpostFacing): Lightpost {
    return (this.displayList as Phaser.Structs.List<Lightpost>).add(new Lightpost(this.scene, x, y, facing));
  };

  /**
   *
   * @param scene
   * @param x
   * @param y
   * @param facing
   */
  public constructor(scene: Phaser.Scene, x: number, y: number, public readonly facing: LightpostFacing = 'left') {
    super(scene, x, y, Lightpost.textureKey, facing);

    let origin: Phaser.Math.Vector2;

    switch (facing) {
      case 'right':
        origin = Lightpost.originRightFacing;
        break;
      case 'left':
      default:
        origin = Lightpost.originLeftFacing;
        break;
    }

    this.setOrigin(origin.x, origin.y);
  }

  public castLighting(ambient: Phaser.Textures.CanvasTexture, minMagnitude = 0, maxMagnitude = 1): void {
    maxMagnitude = Phaser.Math.Clamp(maxMagnitude, 0, 1);
    minMagnitude = Phaser.Math.Clamp(minMagnitude, 0, maxMagnitude);

    const lightbar = this.calculateLightbar();

    this.castLightbar(lightbar, ambient, maxMagnitude);
    this.castRays(lightbar, ambient, minMagnitude, maxMagnitude);
    this.castForeground(lightbar, ambient, minMagnitude, maxMagnitude);

    ambient.refresh();
  }

  /**
   *
   * @returns
   */
  private calculateLightbar(): Phaser.Geom.Rectangle {
    let origin: Phaser.Math.Vector2;

    switch (this.facing) {
      case 'right':
        origin = Lightpost.lightbarOriginRightFacing;
        break;
      case 'left':
      default:
        origin = Lightpost.lightbarOriginLeftFacing;
        break;
    }

    const dimensions = Lightpost.lightbarDimensions;
    const topLeft = this.getTopLeft(undefined, true);

    const x = Math.floor(topLeft.x + this.displayWidth * origin.x);
    const y = Math.floor(topLeft.y + this.displayHeight * origin.y);
    const width = Math.floor(dimensions.x * this.scaleX);
    const height = Math.floor(dimensions.y * this.scaleY);

    return new Phaser.Geom.Rectangle(x, y, width, height);
  }

  /**
   *
   * @param lightbar
   * @param ambient
   * @param maxMagnitude
   */
  private castLightbar(
    lightbar: Phaser.Geom.Rectangle,
    ambient: Phaser.Textures.CanvasTexture,
    maxMagnitude: number
  ): void {
    const imageData = ambient.context.getImageData(lightbar.x, lightbar.y, lightbar.width, lightbar.height);

    for (let y = 0; y < lightbar.height; ++y) {
      for (let x = 0; x < lightbar.width; ++x) {
        const ix = 4 * (y * imageData.width + x);
        imageData.data[ix + 3] = Math.floor(255 * (1 - maxMagnitude));
      }
    }

    ambient.context.putImageData(imageData, lightbar.x, lightbar.y);
  }

  /**
   *
   * @param lightbar
   * @param ambient
   * @param minMagnitude
   * @param maxMagnitude
   */
  private castRays(
    lightbar: Phaser.Geom.Rectangle,
    ambient: Phaser.Textures.CanvasTexture,
    minMagnitude: number,
    maxMagnitude: number
  ): void {
    const beginY = lightbar.bottom;
    const endY = this.getBottomCenter().y;

    const numSteps = endY - beginY;
    const stepDelta = 1;

    for (let step = 0; step < numSteps; step += stepDelta) {
      const maxMagStep = step + 1;
      const maxMagWidthDelta = maxMagStep * 2;
      const maxMagWidth = lightbar.width + maxMagWidthDelta;

      const grdMagStep = maxMagStep * 2;
      const grdMagWidthDelta = grdMagStep * 2;

      const sx = lightbar.left - maxMagStep - grdMagStep;
      const sy = lightbar.bottom + step;
      const sw = maxMagWidth + grdMagWidthDelta;
      const sh = stepDelta;

      const imageData = ambient.context.getImageData(sx, sy, sw, sh);

      for (let y = 0; y < sh; ++y) {
        for (let x = 0; x < sw; ++x) {
          let magnitude = maxMagnitude;

          if (x < grdMagStep) {
            magnitude = Phaser.Math.Clamp(maxMagnitude * ((x + 1) / grdMagStep), minMagnitude, maxMagnitude);
          } else if (x >= grdMagStep + maxMagWidth) {
            magnitude = Phaser.Math.Clamp(
              maxMagnitude * ((grdMagStep - (x - (grdMagStep + maxMagWidth) + 1)) / grdMagStep),
              minMagnitude,
              maxMagnitude
            );
          }

          const ix = 4 * (y * imageData.width + x);
          imageData.data[ix + 3] = 255 * (1 - magnitude);
        }
      }

      ambient.context.putImageData(imageData, sx, sy);
    }
  }

  /**
   *
   * @param lightbar
   * @param ambient
   * @param minMagnitude
   * @param maxMagnitude
   */
  private castForeground(
    lightbar: Phaser.Geom.Rectangle,
    ambient: Phaser.Textures.CanvasTexture,
    minMagnitude: number,
    maxMagnitude: number
  ): void {
    const beginY = lightbar.bottom;
    const endY = this.getBottomCenter().y;

    const numSteps = endY - beginY;

    const maxHeight = Math.floor(Lightpost.lightbarCastForegroundMagnitude * this.scaleY);

    const stepDelta = 1; // Math.floor(maxWidth / maxHeight);

    for (let step = 0; step < maxHeight; step += stepDelta) {
      const maxMagStep = numSteps - step;
      const maxMagWidthDelta = maxMagStep * 2;
      const maxMagWidth = lightbar.width + maxMagWidthDelta;

      const grdMagStep = maxMagStep * 2;
      const grdMagWidthDelta = grdMagStep * 2;

      const sx = lightbar.left - maxMagStep - grdMagStep;
      const sy = lightbar.bottom + numSteps + step;
      const sw = maxMagWidth + grdMagWidthDelta;
      const sh = stepDelta;

      const imageData = ambient.context.getImageData(sx, sy, sw, sh);

      for (let y = 0; y < sh; ++y) {
        for (let x = 0; x < sw; ++x) {
          let magnitude = maxMagnitude;

          if (x < grdMagStep) {
            magnitude = Phaser.Math.Clamp(maxMagnitude * ((x + 1) / grdMagStep), minMagnitude, maxMagnitude);
          } else if (x >= grdMagStep + maxMagWidth) {
            magnitude = Phaser.Math.Clamp(
              maxMagnitude * ((grdMagStep - (x - (grdMagStep + maxMagWidth) + 1)) / grdMagStep),
              minMagnitude,
              maxMagnitude
            );
          }

          magnitude *= 1 - (step + 1) / maxHeight;
          magnitude = Phaser.Math.Clamp(magnitude, minMagnitude, maxMagnitude);

          const ix = 4 * (y * imageData.width + x);
          imageData.data[ix + 3] = 255 * (1 - magnitude);
        }
      }

      ambient.context.putImageData(imageData, sx, sy);
    }
  }
}
