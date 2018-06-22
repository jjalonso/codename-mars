import Phaser from 'phaser';

class Button extends Phaser.GameObjects.Container {

  constructor(scene, str, x, y, width, height, cb) {
    super(scene, x, y);

    this._create(str, width, height, cb);
  }

  _create(str, width, height, cb) {
    let x = -(width / 2);
    const y = -(height / 2);

    const text = this.scene.add.text(0, 0, str).setOrigin(0.5);
    const box = this.scene.add.graphics()
      .fillStyle(0xffffff, 0.3)
      .fillRect(x, y, width, height)
      .on('pointerdown', () => cb())
      .setInteractive(
        new Phaser.Geom.Rectangle(x, y, width, height),
        Phaser.Geom.Rectangle.Contains
      )

    this.add([box, text]);
  }

}

export default Button;