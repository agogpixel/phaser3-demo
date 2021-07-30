import { MainScene, PreloadScene } from './scenes'

export function app(): void {
  new Phaser.Game({
    title: 'agogpixel/phaser3-demo',
    version: '0.0.0',
    type: Phaser.AUTO,
    parent: 'body',
    pixelArt: true,
    dom: {
      createContainer: true
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: '100%',
      height: '100%'
    },
    plugins: {
      global: []
    },
    scene: [PreloadScene, MainScene]
  });
}
