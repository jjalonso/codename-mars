import { LensScene } from '../../components/scenes/lens-scene';
import { Checkbox } from '../../components/ui/checkbox';
import { LootItem, LootPanel } from '../../components/ui/loot-panel';



class StationScene extends LensScene {

  constructor() {
    super('station-scene', 'pause-scene');
  }

  create() {
    super.create();

    // TODO: Use a factory?, this object should not know about x,y...
    const item1 = new LootItem(this, 0, 0, 'item1');
    const item2 = new LootItem(this, 0, 0, 'item2');

    const itemBox = new LootPanel(this, 0, 0, 100, 3, 2, [item1], [item2]);
    const helpText = this.add.text(250, this.cameras.main.height - 50, 'checkbox demo');
    const checkbox = new Checkbox(this, 400, this.cameras.main.height - 42, value => console.log(value));

    // this.add.existing(itemBox);
    this.setLensContainer(itemBox, (this.cameras.main.width / 2) - 150, (this.cameras.main.height / 2) - 200);
    this.add.existing(checkbox);
    this.add.existing(helpText);
  }

}

export default StationScene;