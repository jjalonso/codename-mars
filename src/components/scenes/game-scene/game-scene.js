import Phaser from 'phaser';

class GameScene extends Phaser.Scene {

  constructor(sceneId) {
    super(sceneId);
    this._fadeTime = 2000;
  }

  init(data) {
    if (data.fadeInTime) {
      let camera = this.cameras.main;
      camera.fadeFrom(data.fadeInTime, 0, 0, 0, true);
    }
  }

  fadeInStart(sceneId, data, time = this._fadeTime) {
    data = Object.assign(data || {}, { fadeInTime: time });
    this.scene.start(sceneId, data);
  }

  fadeOutInStart(sceneId, data, time = this._fadeTime) {
    data = Object.assign(data || {}, { fadeInTime: time });
    let camera = this.cameras.main;
    camera.fade(time, 0, 0, 0, true, (cam, progress) => {
      if (progress === 1) {
        this.scene.start(sceneId, data);
      };
    });
  }

}

export default GameScene;

