import { RoomScene } from '../../entities/room'
import antennaDialogues from './dialogues.json';

class AntennaScene extends RoomScene {

    constructor() {
        super('AntennaScene', antennaDialogues);
    }

    create() {
        super.create();

        

        // this._dialogManager.executeAction(0);
    }
}

export default AntennaScene;