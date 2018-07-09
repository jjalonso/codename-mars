import { Button } from '../../components/ui/button';

class PauseScene extends Phaser.Scene {

  constructor() {
    super('pause-scene');
    this._pausableScene = null;
  }

  init(data) {
    this._pausableSceneId = data.pausableSceneId;
  }

  create() {
    const cam = this.cameras.main;
    const xCenter = cam.width / 2;
    const yCenter = cam.height / 2;

    this._box = this.add.graphics();
    this._box.fillStyle(0xffffff, 0.6);
    this._box.fillRect(0, 0, cam.width, cam.height);

    const resumeBtn = new Button(this, 'RESUME', xCenter, yCenter, () => {
      this.scene.stop(this.scene.key);
      this.scene.resume(this._pausableSceneId)
    });
    this.add.existing(resumeBtn);


    // const text = this.add.text(xCenter, yCenter, 'MENU SCENE');
  };





}

export default PauseScene;