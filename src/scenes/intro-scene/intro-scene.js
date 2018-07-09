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

    this._text = this.add.text(xCenter, yCenter, '"Man in Mars"', { fontSize: 25 }).setOrigin(0.5);
    this._textHelp = this.add.text(xCenter, yCenter + 100, '(PRESS TO START YOUR JOURNEY)', { fontSize: 12 }).setOrigin(0.5);


    this.input.once('pointerdown', () => this._onContinueTriggered());
  };

  _onContinueTriggered() {

    this.time.delayedCall(1000, () => {
      this.fadeOutInStart('nav-scene');
    });
    this.sound.add('theme').play();

  }
}

export default IntroScene;