import { RoomScene } from '../../components/scenes/room';
import antennaDialogues from './dialogues.json';

class AntennaScene extends RoomScene {

  constructor() {
    super('antenna-scene', antennaDialogues);
  }

}

export default AntennaScene;