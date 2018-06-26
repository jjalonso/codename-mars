import { PausableScene } from '../../components/scenes/pausable-scene';
import { LootItem, LootPanel } from '../../components/ui/loot-panel';

class StationScene extends PausableScene {

  constructor() {
    super('station-scene', 'pause-scene');
  }

  create() {
    // TODO: Use a factory, this object should not know about x,y...
    const item1 = new LootItem(this, 0, 0, 'item1');
    const item2 = new LootItem(this, 0, 0, 'item2');

    const itemBox = new LootPanel(this, 0, 0, 100, 3, 2, [item1], [item2]);
    this.add.existing(itemBox);
  }

}

export default StationScene;