import { LightpostPlugin } from './plugins';
import { MainScene, PreloadScene } from './scenes';

/**
 * Game configuration.
 */
export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'body',
  pixelArt: true,
  dom: {
    createContainer: false,
    behindCanvas: false,
    pointerEvents: undefined
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1600,
    height: 900
  },
  plugins: {
    global: [{ key: LightpostPlugin.key, plugin: LightpostPlugin, start: true }]
  },
  scene: [PreloadScene, MainScene]
};
