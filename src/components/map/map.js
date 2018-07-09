import ngraphGraph from 'ngraph.graph';
import ngraphPath from 'ngraph.path';
import Phaser from 'phaser';

class Map extends Phaser.GameObjects.Container {

  constructor(scene, images, x, y, children) {
    super(scene, x, y, children);

    this.character = null;
    this._graph = null;
    this._character = null;
    this._locationsFrontIndex = 300;
    this._locationsBackIndex = 100;
    this._isCharacterMoving = false;
    this._walkingSpeed = 16;

    this._setMapTiles(images);
    this._initGraph();
  }

  _initGraph() {
    this._graph = ngraphGraph();
    this._pathFinder = ngraphPath.aStar(this._graph);
  }

  add(child, isOverActor = true) {
    if (child instanceof Phaser.GameObjects.GameObject) {
      if (isOverActor) {
        // Locations over actor index range: 300+
        this.addAt(child, this._locationsFrontIndex++);
      } else {
        // Locations under actor index, range 100-199
        if (this._locationsBackIndex > 199) throw "Only 99 under actor locations is supported";
        this.addAt(child, this._locationsBackIndex++);
      }
    }
    this._graph.addNode(child.name, child);
  }

  addLink(from, to) {
    if (!this._graph.hasNode(from.name) || !this._graph.hasNode(to.name)) {
      throw 'MapLocation or MapWaypoint not found. Did you added it?'
    }
    this._graph.addLink(from.name, to.name);
  }

  _setMapTiles(images) {
    // Map images index 0-99
    if (images.length > 99) throw "Only 99 map tiles is supported";
    images.forEach((image, index) => this.addAt(image, index));
  }

  setActorSprite(sprite) {
    // Actor index, 100-199
    this._character && this.remove(this._character)
    this.addAt(sprite, 100);
    this._character = sprite;
  }

  setActorInLocation(location) {
    this._character.setPosition(...location.walkingPosition);
    this.scene.registry.set('actor-map-location', location);
  }

  _calcWalkingTime(from, to) {
    let [x, y] = to.walkingPosition;
    let [fromX, fromY] = from.walkingPosition;
    return Phaser.Math.Distance.Between(fromX, fromY, x, y) * this._walkingSpeed;
  }

  _enterNextScene(location) {
    let locationSceneId = location.nextScene;
    this._character.anims.stop('walk');
    this._isCharacterMoving = false;
    this.scene.scene.run(locationSceneId, { mapSceneId: this.scene.scene.key });
    this.scene.scene.pause(this.scene.scene.key);
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

  locationClicked(location) {
    this._walkTo(location);
  }

  // TODO: Should I pass only position for less dependency between 
  _walkTo(location) {
    if (this._isCharacterMoving) return;

    let currentLocation = this.scene.registry.get('actor-map-location'); // TODO: This should have different ID depend of map

    // Already there?
    if (location.name === currentLocation.name) { // TODO: check why a full object comparison doesnt work?
      this._enterNextScene(location);
    } else {
      this._isCharacterMoving = true;
      let path = this._pathFinder.find(currentLocation.name, location.name).reverse();
      this.scene.tweens.timeline({
        targets: [this._character],
        onComplete: () => this._enterNextScene(location),
        onStart: () => this._onTravelStarted(),
        tweens: this._buildCharacterTweens(path)
      });
    }

    this.scene.registry.set('actor-map-location', location)
  }

}

export default Map;