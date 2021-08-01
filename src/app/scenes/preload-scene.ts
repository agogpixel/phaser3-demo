import { MainScene } from './main-scene';

/**
 * Preload scene.
 */
export class PreloadScene extends Phaser.Scene {
  /**
   * Scene key.
   */
  public static readonly key = 'Preload';

  /**
   * Instantiate load scene.
   */
  public constructor() {
    super(PreloadScene.key);
  }

  /**
   * Lifecycle method called after init & before create.
   */
  public preload(): void {
    // Tileset.
    this.load.image('roguelikeCity_transparent', 'assets/roguelikeCity_transparent.png');

    // Tilemap data.
    this.load.tilemapTiledJSON('mapA', 'assets/mapA.json');

    // Rain particle.
    this.load.image('blue', 'assets/blue.png');
  }

  /**
   * Lifecycle method called after init & preload.
   */
  public create(): void {
    this.createLightpostTexture();

    this.scene.transition({
      target: MainScene.key,
      duration: 1500,
      sleep: false,
      allowInput: false,
      onUpdate: (progress: number) => {
        const style = document.getElementById('splashContainer').style;

        style.opacity = (1 - progress).toString();

        if (progress === 1) {
          style.display = 'none';
          style.opacity = '1';
        }
      }
    });
  }

  /**
   * Create lightpost texture sheet from tileset.
   */
  private createLightpostTexture(): void {
    const tilemap = this.make.tilemap({ tileWidth: 16, tileHeight: 16, width: 2, height: 3 });
    const tileset = tilemap.addTilesetImage('roguelikeCity_transparent', 'roguelikeCity_transparent', 16, 16, 0, 1);

    const layer = tilemap.createBlankLayer('layer', tileset);
    this.children.remove(layer);

    const renderTexture = this.make.renderTexture({ x: 0, y: 0, width: layer.width * 2, height: layer.height }, false);

    // Left facing.
    layer.putTileAt(593, 0, 0);
    layer.putTileAt(630, 0, 1);
    layer.putTileAt(667, 0, 2);

    // Right facing.
    layer.putTileAt(594, 1, 0);
    layer.putTileAt(631, 1, 1);
    layer.putTileAt(668, 1, 2);

    const texture = renderTexture.draw(layer).saveTexture('lightpost');

    texture.add('left', 0, 0, 0, 16, 48)
    texture.add('right', 0, 16, 0, 16, 48)
  }
}
