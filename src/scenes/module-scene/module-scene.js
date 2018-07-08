import { LensScene } from '../../components/scenes/lens-scene';


class ModuleScene extends LensScene {

  constructor() {
    super('module-scene', 'pause-scene');
  }

  create() {
    super.create();

    const mock = this.add.image(0, 0, 'lens-module-mock');
    const lensContainer = this.add.container(this, 0, 0);
    lensContainer.add(mock);

    this.setLensContainer(lensContainer, this.cameras.main.width / 2, this.cameras.main.height / 2);
  }
}

export default ModuleScene;