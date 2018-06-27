import Phaser from 'phaser';

class Checkbox extends Phaser.GameObjects.Container {

  constructor(scene, x, y, cb, value = false) {
    super(scene, x, y);
    this._value = null;
    this._check = null;
    this._box = null;

    this._create(cb);
  }

  _setValue(value) {
    this._value = value;
    this._check.setVisible(value);
  }

  _create(cb) {
    // let x = -(width / 2);
    // const y = -(height / 2);

    this._box = this.scene.add.image(0, 0, 'ui-box')
      .on('pointerdown', () => {

        this._value = !this._value;
        this._check.setVisible(this._value);
        cb(this._value);
      })
      .setInteractive(
        new Phaser.Geom.Rectangle(-5, -5, 26, 26),
        Phaser.Geom.Rectangle.Contains
      )
    this._check = this.scene.add.image(0, 0, 'ui-check')

    this.add([this._box, this._check]);
  }

  get value() {
    return this._value;
  }
}

export default Checkbox;