import Phaser from 'phaser';

class MapLocation extends Phaser.GameObjects.Image {

  constructor(map, walkingX, walkingY, nextScene, x, y, texture) {
    super(map.scene, x, y, texture);
    this._map = map;
    this._walkingPosition = [walkingX, walkingY]
    this._nextScene = nextScene;

    this.setName(texture);
    this._bindEvents();
  }

  _bindEvents() {
    this
      .setInteractive()
      .on('pointerdown', () => this._map.locationClicked(this))
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
    value ? this.setTint(0xf4df42) : this.clearTint()
  }

}

export default MapLocation;