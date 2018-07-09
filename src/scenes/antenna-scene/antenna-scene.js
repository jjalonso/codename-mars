import { RoomScene } from '../../components/scenes/room';
import antennaDialogues from './dialogues.json';

class AntennaScene extends RoomScene {

  constructor() {
    super('antenna-scene', 'pause-scene', antennaDialogues);
  }

  goUnderground() {
    this.fadeOutInStart('nav-under-scene', {}, ['nav-scene']);
  }

}

export default AntennaScene;