import { ProgressBar } from '../../components/ui/progress-bar';

class LoaderScene extends Phaser.Scene {

  constructor() {
    super('loader-scene');

    // super({
    //     key: 'LoaderScene',
    //     files: [
    //         { key: 'intro-bg', url: 'assets/intro-bg.png', type: 'image' }
    //     ]
    // });
  }

  preload() {
    const camera = this.cameras.main;
    const xCenter = camera.width / 2;
    const yCenter = camera.height / 2;

    // this.load.image('logo', 'assets/logo.png');
    this._progressBar = new ProgressBar(this, xCenter, yCenter);
    this.add.existing(this._progressBar);

    this.load.on('progress', value => {
      this._progressBar.setProgress(value);
    });

    // Load all game assets
    this.load.pack('assets', 'pack.json');



    // this.load.on('fileprogress', function (file) {
    //     console.log(file.src);
    // });

    this.load.on('complete', () => {
      this._progressBar.destroy();
      this.add.text(xCenter, yCenter, '"Broke Games" presents').setOrigin(0.5);

    });
  }

  create() {
    // const camera = this.cameras.main;
    console.log(this.scene)

    // this.add.image(camera.width / 2, camera.height / 2, 'logo');



    // this.add.image(camera.width / 2, camera.height / 2, 'intro-bg');
    // this.add.text(camera.width / 2, camera.height / 2 + 100, 'Loading').setOrigin(0.5);
  }

  update() {
    if (this.input.activePointer.isDown) {
      this.scene.start('nav-scene')
    }
  }
}

export default LoaderScene;