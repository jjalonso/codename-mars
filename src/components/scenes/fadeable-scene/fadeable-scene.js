import Phaser from 'phaser';

class FadeableScene extends Phaser.Scene {

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

  fadeInRun(sceneId, data, time = this._fadeTime) {
    data = Object.assign(data || {}, { fadeInTime: time });
    this.scene.run(sceneId, data);
  }

  fadeInStart(sceneId, data, auxOutScenes = [], time = this._fadeTime) {
    data = Object.assign(data || {}, { fadeInTime: time });
    auxOutScenes.forEach(sceneId => this.scene.stop(sceneId));
    this.scene.start(sceneId, data);
  }

  fadeOutInStart(sceneId, data, auxOutScenes = [], time = this._fadeTime) {
    data = Object.assign(data || {}, { fadeInTime: time });
    let camera = this.cameras.main;
    camera.fade(time, 0, 0, 0, true, (cam, progress) => {
      if (progress === 1) {
        auxOutScenes.forEach(sceneId => this.scene.stop(sceneId));
        this.scene.start(sceneId, data);
      };
    });
  }

}

export default FadeableScene;

