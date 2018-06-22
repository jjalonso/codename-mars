
import { FadeableScene } from '../fadeable-scene';

class PausableScene extends FadeableScene {

  constructor(sceneId, pauseSceneId) {
    super(sceneId);
    this._pauseSceneId = pauseSceneId;
  }

  init(data) {
    super.init(data);
    this.input.keyboard.on('keydown_ESC', event => {
      this.scene.pause(this.scene.key);
      this.scene.run(this._pauseSceneId, { pausableSceneId: this.scene.key });
      this.scene.bringToTop(this._pauseSceneId);
    });
  }

}

export default PausableScene;

