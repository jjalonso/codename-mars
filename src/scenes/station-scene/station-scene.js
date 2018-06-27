import { PausableScene } from '../../components/scenes/pausable-scene';
import { Button } from '../../components/ui/button';
import { LootItem, LootPanel } from '../../components/ui/loot-panel';


class StationScene extends PausableScene {

  constructor() {
    super('station-scene', 'pause-scene');
  }

  create() {
    // TODO: Use a factory?, this object should not know about x,y...
    const item1 = new LootItem(this, 0, 0, 'item1');
    const item2 = new LootItem(this, 0, 0, 'item2');

    const itemBox = new LootPanel(this, 10, 10, 100, 3, 2, [item1], [item2]);
    const backBtn = new Button(this, 'Back', 150, this.cameras.main.height - 50, 200, 50, () => {
      this.fadeOutInStart('nav-scene');
    });

    this.add.existing(itemBox);
    this.add.existing(backBtn);

  }

}

export default StationScene;