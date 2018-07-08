import Phaser from 'phaser';

class Checkbox extends Phaser.GameObjects.Container {

  constructor(scene, x, y, cb, value = false) {
    super(scene, x, y);
    this._value = null;
    this._check = null;
    this._box = null;

    this._create(cb);
    this._setValue(value);
  }

  _setValue(value) {
    this._value = value;
    this._check.setVisible(value);
  }

  _create(cb) {
    this._box = this.scene.add.image(0, 0, 'ui-box')
      .on('pointerdown', () => {
        this._value = !this._value;
        this._check.setVisible(this._value);
        cb(this._value);
      })
    this._box.setInteractive(this._createBounds(), Phaser.Geom.Rectangle.Contains);
    this._check = this.scene.add.image(0, 0, 'ui-check')

    this.add([this._box, this._check]);
  }

  _createBounds(padding = 10) {
    return new Phaser.Geom.Rectangle(-padding, -padding, this._box.width + (padding * 2), this._box.height + (padding * 2))
    // var bounds = this._box.getBounds()
    // return Phaser.Geom.Rectangle.Inflate(bounds, padding, padding);
  }

  get value() {
    return this._value;
  }
}

export default Checkbox;