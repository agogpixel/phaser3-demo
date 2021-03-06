import { Lightpost } from '../gameobjects';
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
    this.load.tilemapTiledJSON('background', 'assets/background.json');
    this.load.tilemapTiledJSON('lightpost', 'assets/lightpost.json');

    // Rain particle.
    this.load.image('blue', 'assets/blue.png');
  }

  /**
   * Lifecycle method called after init & preload.
   */
  public create(): void {
    Lightpost.generateTexture(this);

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
}
