import Phaser from 'phaser';

class Button extends Phaser.GameObjects.Container {

  constructor(scene, text, x, y, width, height) {
    super(scene, x, y);
    this._width = width;
    this._height = height;

    this._create(text);
  }

  _create(text) {
    this._box = this.scene.add.graphics();
    this._text = this.scene.add.text(text, 0, 0)
    this.add([this._box, this._text]);
    this._box.fillStyle(0x222222, 0.8);
    this._box.fillRect(-(this._width / 2), -(this._height / 2), this._width, this._height);
  }

}

export default Button;