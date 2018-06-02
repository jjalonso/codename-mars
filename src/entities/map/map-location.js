
class MapLocation {

    constructor(id, image, walkingPosX, walkingPosY, scene, hoverColor=0xff0000) {
        // TODO: Create custom objects instead
        // https://labs.phaser.io/edit.html?src=src\plugins\custom%20game%20object.js
        this._id = id;
        this._image = image;
        this._scene = scene;
        this._walkingPosition = [walkingPosX, walkingPosY]
        this._hoverColor = hoverColor;
    }

    get isIntersection() {
        return this._image == null; 
    }

    get id() {
        return this._id;
    }

    get image() {
        return this._image;
    }

    get scene() {
        return this._scene;
    }

    get walkingPosition() {
        return this._walkingPosition;
    }

    setHover(value) {
        value ? this._image.setTint(this._hoverColor) : this._image.clearTint()
    }

}

export default MapLocation;