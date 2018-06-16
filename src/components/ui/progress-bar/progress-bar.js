import Phaser from 'phaser';

class ProgressBar extends Phaser.GameObjects.Container {

  constructor(scene, x, y, children) {
    super(scene, x, y, children);
    this._padding = 7;
    this._width = 600;
    this._height = 40;

    this._create(scene);
  }

  _create() {
    this._bar = this.scene.add.graphics();
    this._box = this.scene.add.graphics();
    this.add([this._bar, this._box]);
    this._box.fillStyle(0x222222, 0.8);
    this._box.fillRect(-(this._width / 2), -(this._height / 2), this._width, this._height);
  }

  setProgress(value) {
    // TODO: You can see the bar start before the box at the very first second of the loading
    // Fix is required
    this._bar.clear();
    this._bar.fillStyle(0xffffff, 1);
    this._bar.fillRect(
      -(this._width / 2) + this._padding,
      -(this._height / 2) + this._padding,
      (this._width * value) - (this._padding * 2),
      this._height - this._padding * 2
    );
  }

}

export default ProgressBar;