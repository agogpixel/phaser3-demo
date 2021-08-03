import { Lightpost } from '../gameobjects';

/**
 * Main scene.
 */
export class MainScene extends Phaser.Scene {
  /**
   * Scene key.
   */
  public static readonly key = 'Main';

  /**
   *
   */
  public static readonly scaleFactor = 4;

  public readonly add: Phaser.GameObjects.GameObjectFactory & { [Lightpost.key]: typeof Lightpost.factory };

  public readonly make: Phaser.GameObjects.GameObjectCreator & { [Lightpost.key]: typeof Lightpost.creator };

  /**
   * Keyboard controls.
   */
  private controls: Phaser.Cameras.Controls.FixedKeyControl;

  /**
   * Instantiate main scene.
   */
  public constructor() {
    super(MainScene.key);
  }

  /**
   * Lifecycle method called before all others.
   */
  public init(): void {
    // Initially disable input.
    this.input.keyboard.enabled = false;
  }

  /**
   * Lifecycle method called after init & preload.
   */
  public create(): void {
    // Scene fade in.
    this.cameras.main.setAlpha(0);
    this.events.once(Phaser.Scenes.Events.TRANSITION_START, (fromScene, duration) => {
      this.tweens.add({
        targets: this.cameras.main,
        alpha: 1,
        duration,
        delay: 1000,
        // Allow input after fade in complete.
        onComplete: () => (this.input.keyboard.enabled = true)
      });
    });

    const scaleFactor = MainScene.scaleFactor;

    // Background.
    const tilemap = this.make.tilemap({ key: 'background', insertNull: true });
    const tileset = tilemap.addTilesetImage('roguelikeCity_transparent');
    const layer = tilemap.createLayer('layer1', tileset).setScale(scaleFactor);
    tilemap.createLayer('layer2', tileset).setScale(scaleFactor);

    // Lightposts.
    const cx = (tilemap.tileWidth / 2) * scaleFactor;
    const cy = (tilemap.tileHeight / 2) * scaleFactor;
    const v = new Phaser.Math.Vector2();
    layer.tileToWorldXY(7, 9, v);
    const lp1 = this.add
      .lightpost(v.x + cx, v.y + cy + cy / 2, 'right')
      .setScale(scaleFactor)
      .setDepth(9);
    layer.tileToWorldXY(23, 9, v);
    const lp2 = this.add
      .lightpost(v.x + cx, v.y + cy + cy / 2, 'right')
      .setScale(scaleFactor)
      .setDepth(9);
    layer.tileToWorldXY(15, 15, v);
    const lp3 = this.add
      .lightpost(v.x + cx, v.y + cy - cy / 2, 'left')
      .setScale(scaleFactor)
      .setDepth(15);

    // Rain particle emitter.
    const rainEmitter = this.add
      .particles('blue')
      .setDepth(12)
      .createEmitter({
        x: { min: 0, max: layer.displayWidth },
        y: 0,
        lifespan: { min: 200, max: 1000 },
        speedY: 1500,
        scaleY: { min: 1, max: 4 },
        scaleX: 0.01,
        quantity: 1,
        blendMode: 'SCREEN',
        emitCallback: (particle: Phaser.GameObjects.Particles.Particle) =>
          rainEmitter.manager.setDepth(Phaser.Math.RND.integerInRange(2, 50))
      });

    // Lighting.
    const lightingTexture = this.textures.createCanvas('lighting', layer.displayWidth, layer.displayHeight);
    lightingTexture.context.fillStyle = 'rgba(0, 0, 0, 0.75)';
    lightingTexture.context.fillRect(0, 0, layer.displayWidth, layer.displayHeight);
    lp1.castLighting(lightingTexture, 0.25);
    lp2.castLighting(lightingTexture, 0.25);
    lp3.castLighting(lightingTexture, 0.25);
    this.add.image(0, 0, 'lighting').setOrigin(0).setDepth(100);

    // Keyboard controls.
    const cursors = this.input.keyboard.createCursorKeys();
    this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
      camera: this.cameras.main,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      speed: 0.5,
      // TODO: weird - see Phaser.Cameras.Controls.FixedKeyControl zoom logic. Follow up with Phaser 3 maintainers...
      zoomIn: this.input.keyboard.addKey('MINUS'),
      zoomOut: this.input.keyboard.addKey('PLUS'),
      maxZoom: 3,
      minZoom: 0.5
    });
    this.add
      .text(0, 0, ['Cursor keys to move camera.', 'Zoom In: +', 'Zoom Out: -'], { fontSize: '32px', color: '#ff00ff' })
      .setDepth(1000)
      .setScrollFactor(0);

    // Set camera bounds to tilemap's current display dimensions.
    this.cameras.main.setBounds(0, 0, layer.displayWidth, layer.displayHeight);
    this.cameras.main.centerOn(layer.displayWidth / 2, layer.displayHeight / 2);
  }

  public update(time: number, delta: number): void {
    this.controls.update(delta);
  }
}
