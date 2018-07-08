import { Button } from '../../ui/button';
import { PausableScene } from '../pausable-scene';

class LensScene extends PausableScene {

  constructor(sceneId, pauseSceneId) {
    super(sceneId, pauseSceneId);
    this._xLens = null;
    this._yLens = null;
    this._radioLens = null;
  }

  create() {
    this.sound.add('zoom').play();

    const cam = this.cameras.main;
    this._xLens = cam.width / 2;
    this._yLens = cam.height / 2;
    this._radioLens = 200;
    this._lensBorder = 15;

    this._drawLensBorder(this._xLens, this._yLens, this._radioLens);
    this._buildBackButton(this._xLens, this._yLens + this._radioLens);
  }

  setLensContainer(container, x, y) {
    this._lensContainer = container;
    this._buildLensMask(this._xLens, this._yLens, this._radioLens - (this._lensBorder / 2), this._lensContainer);
    container.setPosition(x, y);
    this.add.existing(container);
    container.setDepth(8000)
  }

  _buildBackButton(x, y) {
    const button = new Button(this, 'LEAVE', x, y, () => {
      this.scene.resume('nav-scene');
      this.scene.stop(this.scene.key)
    }).setDepth(9999);
    this.add.existing(button);
  }

  _drawLensBorder(x, y, radio) {
    const graphics = this.add.graphics();
    graphics.lineStyle(this._lensBorder, 0xf44277);
    graphics.arc(x, y, radio, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360));
    graphics.strokePath();
  }

  _buildLensMask(x, y, radio, toMask) {
    const lensShape = this.make.graphics();
    lensShape.x = x; lensShape.y = y;
    lensShape.arc(0, 0, radio, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), true, true);
    lensShape.fillPath();
    toMask.mask = new Phaser.Display.Masks.BitmapMask(this, lensShape);
    return lensShape;
  }
}

export default LensScene;

