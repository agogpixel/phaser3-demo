/**
 * Main scene.
 */
export class MainScene extends Phaser.Scene {
  /**
   * Scene key.
   */
  public static readonly key = 'Main';

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

    const scaleFactor = 4;

    // Background.
    const tilemap = this.make.tilemap({ key: 'mapA', insertNull: true });
    const tileset = tilemap.addTilesetImage('roguelikeCity_transparent');
    const layer = tilemap.createLayer('Tile Layer 1', tileset).setScale(scaleFactor);
    tilemap.createLayer('Tile Layer 2', tileset).setScale(scaleFactor);

    // Lightposts.
    const cx = (tilemap.tileWidth / 2) * scaleFactor;
    const cy = (tilemap.tileHeight / 2) * scaleFactor;
    const v = new Phaser.Math.Vector2();
    layer.tileToWorldXY(7, 9, v);
    const lp1 = this.add.image(v.x + cx, v.y + cy + (cy / 2), 'lightpost', 'right').setScale(scaleFactor).setOrigin(0.2, 1).setDepth(9);
    layer.tileToWorldXY(23, 9, v);
    const lp2 = this.add.image(v.x + cx, v.y + cy + (cy / 2), 'lightpost', 'right').setScale(scaleFactor).setOrigin(0.2, 1).setDepth(9);
    layer.tileToWorldXY(15, 15, v);
    const lp3 = this.add.image(v.x + cx, v.y + cy - (cy / 2), 'lightpost', 'left').setScale(scaleFactor).setOrigin(0.8, 1).setDepth(15);

    // Rain particle emitter.
    const rain = this.add.particles('blue').createEmitter({
      x: { min: 0, max: layer.displayWidth },
      y: 0,
      lifespan: 1000,
      speedY: 1500,
      scaleY: { min: 1, max: 4 },
      scaleX: .01,
      quantity: 1,
      blendMode: 'SCREEN',
    });

    // Lighting.
    const shadow = this.add.graphics();
    shadow.depth = 1000;
    shadow.fillStyle(0x000000, 0.75);
    shadow.fillRect(0, 0, layer.displayWidth, layer.displayHeight);

    // TODO: Lighting.
    /*const t1 = this.make.graphics({});
    t1.fillStyle(0xffffff, 1);
    t1.beginPath();
    t1.moveTo(585, 825);
    t1.lineTo(435, 1000);
    t1.lineTo(735, 1000);
    t1.fill();
    const mask = t1.createGeometryMask();
    mask.invertAlpha = true;
    shadow.setMask(mask);*/

    // Keyboard controls.
    const cursors = this.input.keyboard.createCursorKeys();
    this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
      camera: this.cameras.main,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      speed: 0.5,
      // TODO: weird
      zoomIn: this.input.keyboard.addKey('MINUS'),
      zoomOut: this.input.keyboard.addKey('PLUS'),
      maxZoom: 3,
      minZoom: 0.5
    });

    // Set camera bounds to tilemap's current display dimensions.
    this.cameras.main.setBounds(0, 0, layer.displayWidth, layer.displayHeight);
  }

  public update(time: number, delta: number): void {
    this.controls.update(delta);
  }
}
