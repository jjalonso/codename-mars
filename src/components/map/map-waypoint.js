
class MapWaypoint {

  constructor(x, y) {
    this._walkingPosition = [x, y]

    this._name = (this._genUUID());
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