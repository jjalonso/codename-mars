import { RoomScene } from '../../entities/room'
import antennaDialogues from './dialogues.json';

class AntennaScene extends RoomScene {

    constructor() {
        super('AntennaScene', antennaDialogues);
    }

}

export default AntennaScene;