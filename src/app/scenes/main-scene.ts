/**
 * Main scene.
 */
export class MainScene extends Phaser.Scene {
  /**
   * Scene key.
   */
  public static readonly key = 'Main';

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
    this.input.keyboard.enabled = false;
  }

  /**
   * Lifecycle method called after init & preload.
   */
  public create(): void {
    this.cameras.main.setAlpha(0);

    this.events.once(Phaser.Scenes.Events.TRANSITION_START, (fromScene, duration) => {
      this.tweens.add({
        targets: this.cameras.main,
        alpha: 1,
        duration,
        delay: 1000,
        onComplete: () => (this.input.keyboard.enabled = true)
      });
    });

    const map = this.make.tilemap({ key: 'mapA' });
    const tileset = map.addTilesetImage('roguelikeCity_transparent');
    const layer1 = map.createLayer('Tile Layer 1', tileset).setScale(4);
    const layer2 = map.createLayer('Tile Layer 2', tileset).setScale(4);

    const cursors = this.input.keyboard.createCursorKeys();

    this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
      camera: this.cameras.main,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      speed: 0.5
    });

    this.cameras.main.setBounds(0, 0, layer1.displayWidth, layer1.displayHeight);
  }

  public update(time: number, delta: number): void {
    this.controls.update(delta);
  }
}
