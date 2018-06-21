import ngraphGraph from 'ngraph.graph';
import ngraphPath from 'ngraph.path';
import Phaser from 'phaser';

class Map extends Phaser.GameObjects.Container {

  constructor(scene, images, x, y, children) {
    super(scene, x, y, children);
    this.character = null;
    this._graph = null;
    this._character = null;
    this._currentCharLocation = null;
    this._isCharacterMoving = false;
    this._walkingSpeed = 16;

    this._setImages(images);
    this._initGraph();
  }

  _initGraph() {
    this._graph = ngraphGraph();
    this._pathFinder = ngraphPath.aStar(this._graph);
  }

  add(child, isOverActor = true) {
    if (child instanceof Phaser.GameObjects.GameObject) {
      let index = isOverActor ? -3 : -1;
      this.addAt(child, index);
    }
    this._graph.addNode(child.name, child);
    console.log(this._graph)
  }

  addLink(from, to) {
    if (!this._graph.hasNode(from.name) || !this._graph.hasNode(to.name)) {
      throw 'MapLocation or MapWaypoint not found. Did you added it?'
    }
    this._graph.addLink(from.name, to.name);
  }

  _setImages(images) {
    images.forEach(image => this.addAt(image, -4));
  }

  setActor(sprite, location) {
    this._character && this.remove(this._character)
    this.addAt(sprite, -2);
    this._character = sprite;
    this._character.setPosition(...location.walkingPosition);
    this._currentCharLocation = location;
  }

  _calcWalkingTime(from, to) {
    let [x, y] = to.walkingPosition;
    let [fromX, fromY] = from.walkingPosition;
    return Phaser.Math.Distance.Between(fromX, fromY, x, y) * this._walkingSpeed;
  }

  _enterNextScene(location) {
    this._isCharacterMoving = false;
    this._character.anims.stop('walk');

    let locationScene = location.nextScene;
    this.scene.scene.start(locationScene);
  }

  _onTravelStarted() {
    this._character.play('walk', true);
  }

  _buildCharacterTweens(path) {
    let fromLocation = path.splice(0, 1)[0].data
    let offset = 0;

    return path.map((toLocation, index) => {
      toLocation = toLocation.data;
      let time = this._calcWalkingTime(fromLocation, toLocation);

      let [x, y] = toLocation.walkingPosition;
      let t = {
        duration: time,
        ease: index === 0 ? 'Quad.easeIn' : 'Linear.InOut',
        offset: offset,
        x: x,
        y: y
      };

      fromLocation = toLocation;
      offset = offset + time;
      return t;
    });
  }

  // TODO: Should I pass only position for less dependency between 
  walkTo(location) {
    if (this._isCharacterMoving) return;

    this._isCharacterMoving = true;
    let path = this._pathFinder.find(this._currentCharLocation.name, location.name).reverse();

    let tween = this.scene.tweens.timeline({
      targets: [this._character],
      onComplete: () => this._enterNextScene(location),
      onStart: () => this._onTravelStarted(),
      tweens: this._buildCharacterTweens(path)
    });

    this._currentCharLocation = location;
  }

}

export default Map;