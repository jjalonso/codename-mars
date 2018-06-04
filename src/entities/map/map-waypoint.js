import Phaser from 'phaser';

class MapWaypoint {

    constructor(scene, x, y) {
        // var circle = new Phaser.Geom.Circle(400, 300, 5);
        // var graphics = scene.add.graphics({ fillStyle: { color: 0xff0000 } });
        // graphics.fillCircleShape(circle);

        this._walkingPosition = [x, y]

        this._name = (this._genUUID());
    }

    _genUUID() {
        return `mapWaypoint-${Math.random().toString(36).substr(2, 9)}`;
    }
    
    get name() {
        return this._name;
    }
    // get _isIntersection() {
    //     return false;
    //     // return this._image == null; 
    // }

    get walkingPosition() {
        return this._walkingPosition;
    }

}

export default MapWaypoint;