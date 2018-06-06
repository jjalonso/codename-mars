import Phaser from 'phaser';

class MapLocation extends Phaser.GameObjects.Image {

    constructor(scene, walkingX, walkingY, nextScene, x, y, texture) {
        super(scene, x, y, texture);
        this._walkingPosition = [walkingX, walkingY]
        this._nextScene = nextScene;

        this.setName(texture);
        this._bindEvents();
    }

    _bindEvents() {
        this
            .setInteractive()
            .on('pointerdown', () => this.scene.walkTo(this))
            .on('pointerover', () => this._setHover(true))
            .on('pointerout', () => this._setHover(false));
    }

    get nextScene() {
        return this._nextScene;
    }

    get walkingPosition() {
        return this._walkingPosition;
    }

    _setHover(value) {
        value ? this.setTint(0xff0000) : this.clearTint()
    }

}

export default MapLocation;