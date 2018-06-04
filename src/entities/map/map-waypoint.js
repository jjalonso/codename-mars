import Phaser from 'phaser';

class MapWaypoint {

    constructor(scene, x, y) {
        this._walkingPosition = [x, y]

        this._name = (this._genUUID());
        // TODO: Add to scene a point if DEBUG enabled.
    }

    _genUUID() {
        return `mapWaypoint-${Math.random().toString(36).substr(2, 9)}`;
    }
    
    get name() {
        return this._name;
    }

    get walkingPosition() {
        return this._walkingPosition;
    }

}

export default MapWaypoint;