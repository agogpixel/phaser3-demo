import { Lightpost } from '../gameobjects';

export class LightpostPlugin extends Phaser.Plugins.BasePlugin {
  public static readonly key = 'lightpostPlugin';

  public constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager);

    pluginManager.registerGameObject(Lightpost.key, Lightpost.factory, Lightpost.creator);
  }
}
