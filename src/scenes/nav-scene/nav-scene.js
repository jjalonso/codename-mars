import { Map, MapLocation, MapWaypoint } from '../../components/map';
import { GameScene } from '../../components/scenes/game-scene';

class NavScene extends GameScene {

  constructor() {
    super('nav-scene');
  }

  create() {
    const camera = this.cameras.main;

    let sky = this.add.image(camera.width / 2, camera.height / 2, 'sky');
    let terrain = this.add.image(camera.width / 2, camera.height / 2, 'terrain');

    this._map = new Map(this, terrain, 0, 0);

    // Map locations
    let moduleLocation = new MapLocation(this._map, 300, 420, 'module-scene', 280, 400, 'module');
    let stationLocation = new MapLocation(this._map, 530, 270, 'station-scene', 560, 230, 'station');
    let antennaLocation = new MapLocation(this._map, 625, 360, 'antenna-scene', 633, 345, 'antenna').setScale(0.3);

    // Map waypoints
    let middleWaypoint = new MapWaypoint(470, 320);
    let antennaWaypoint = new MapWaypoint(610, 400);

    // Add them
    this._map.add(moduleLocation);
    this._map.add(stationLocation);
    this._map.add(antennaLocation);
    this._map.add(middleWaypoint);
    this._map.add(antennaWaypoint);

    // Add links
    this._map.addLink(moduleLocation, middleWaypoint);
    this._map.addLink(middleWaypoint, stationLocation);
    this._map.addLink(middleWaypoint, antennaWaypoint);
    this._map.addLink(antennaWaypoint, antennaLocation);

    // Set actor
    this._map.setActor(this._createAnimActor(), moduleLocation);

    this.add.existing(this._map);
  }

  _createAnimActor() {
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('map-actor', { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1
    });

    return this.add.sprite(0, 0, 'map-actor');

  }

}

export default NavScene;