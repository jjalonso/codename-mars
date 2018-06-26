import Phaser from 'phaser';

class Item extends Phaser.GameObjects.Image {

  constructor(scene, x, y, texture, name) {
    super(scene, x, y, texture);

    this._init(texture);
  }

  _init(texture) {
    this.setName(texture);
    this.setInteractive();
    this.scene.input.setDraggable(this);
  }


}

export default Item;
