import { GameScene } from '../../components/scenes/game-scene';
import { ProgressBar } from '../../components/ui/progress-bar';

class LoaderScene extends GameScene {

  constructor() {
    super('loader-scene');
    this._progressBar = null;
  }

  preload() {
    const camera = this.cameras.main;
    const xCenter = camera.width / 2;
    const yCenter = camera.height / 2;

    this._progressBar = new ProgressBar(this, xCenter, yCenter);

    this.add.existing(this._progressBar);

    this.load.on('progress', value => {
      this._progressBar.setProgress(value);
    });

    // Load all game assets
    this.load.pack('assets', 'pack.json');

    this.load.on('complete', () => {
      this.fadeInStart('intro-scene');
    })

  };
}

export default LoaderScene;