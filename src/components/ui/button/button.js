import Phaser from 'phaser';

class Button extends Phaser.GameObjects.Container {

  constructor(scene, str, x, y, cb) {
    super(scene, x, y);

    this._create(str, cb);
  }

  _create(str, cb) {
    const text = this.scene.add.text(0, 0, str).setOrigin(0.5);
    const buttonBg = this.scene.add.image(0, 0, 'ui-button');

    let x = -(buttonBg.width / 2);
    const y = -(buttonBg.height / 2);

    buttonBg
      .on('pointerdown', () => cb())
      .setInteractive(
        new Phaser.Geom.Rectangle(0, 0, buttonBg.width, buttonBg.height),
        Phaser.Geom.Rectangle.Contains
      )
    this.add([buttonBg, text]);
  }

}

export default Button;