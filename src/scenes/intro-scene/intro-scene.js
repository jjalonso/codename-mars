import { FadeableScene } from '../../components/scenes/fadeable-scene';

class IntroScene extends FadeableScene {

  constructor() {
    super('intro-scene');
    this._progressBar = null;
    this._delay = 2000;
    this._fadeSpeed = 1500;
  }

  preload() {
    const camera = this.cameras.main;
    const xCenter = camera.width / 2;
    const yCenter = camera.height / 2;

    this._text = this.add.text(xCenter, yCenter, '"Man in Mars"').setOrigin(0.5);

    this.time.delayedCall(5000, () => {
      this.fadeOutInStart('nav-scene');
    });
  };

}

export default IntroScene;