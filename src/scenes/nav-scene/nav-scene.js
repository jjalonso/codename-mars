import { Map, MapLocation, MapWaypoint } from '../../components/map';
import { PausableScene } from '../../components/scenes/pausable-scene';

class NavScene extends PausableScene {

  constructor() {
    super('nav-scene', 'pause-scene');
    this._scrollMarginPercent = 0.05;
    this._map = null;
  }

  create() {
    const camera = this.cameras.main;

    let imagesMap = this._buildImagesMap([
      'terrain-01', 'terrain-02', 'terrain-03',
      'terrain-04', 'terrain-05', 'terrain-06',
      'terrain-07', 'terrain-08', 'terrain-09'
    ], 617, 351, 3);

    this._map = new Map(this, imagesMap, 0, 0);
    this._buildMapLocations(this._map);
    this._setupCameraBounds(camera, this._map, 150);
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

  _buildMapLocations(map) {
    // Map locations
    let moduleLocation = new MapLocation(map, 320, 420, 'module-scene', 300, 400, 'module');
    let stationLocation = new MapLocation(map, 790, 670, 'station-scene', 850, 650, 'station');
    let antennaLocation = new MapLocation(map, 1125, 450, 'antenna-scene', 1145, 460, 'antenna').setScale(0.3);

    // Map waypoints
    let moduleWaypoint1 = new MapWaypoint(528, 580);
    let moduleWaypoint2 = new MapWaypoint(625, 605);
    let moduleWaypoint3 = new MapWaypoint(675, 655);
    let stationWaypoint1 = new MapWaypoint(925, 608);

    // Add them
    map.add(moduleLocation);
    map.add(stationLocation, false);
    map.add(antennaLocation);
    map.add(moduleWaypoint1);
    map.add(moduleWaypoint2);
    map.add(moduleWaypoint3);
    map.add(stationWaypoint1);

    // Add links
    map.addLink(moduleLocation, moduleWaypoint1);
    map.addLink(moduleWaypoint1, moduleWaypoint2);
    map.addLink(moduleWaypoint2, moduleWaypoint3);
    map.addLink(moduleWaypoint3, stationLocation);
    map.addLink(moduleWaypoint3, stationWaypoint1);
    map.addLink(stationWaypoint1, antennaLocation);

    // Set actor
    map.setActorSprite(this._createAnimActor());
    map.setActorInLocation(this.registry.get('actor-map-location') || moduleLocation);
  }

  _setupCameraBounds(camera, map, padding) {
    camera.setBounds(
      map.x - padding,
      map.y - padding,
      map.getBounds().width + (padding * 2),
      map.getBounds().height + (padding * 2)
    );
    camera.useBounds = true;
  }

  _buildImagesMap(images, width, height, rowWidth) {
    return images.map((imageId, index) => {
      let x = (index % rowWidth) * width;
      let y = Math.floor(index / (rowWidth)) * height;
      return this.add.image(x, y, imageId).setOrigin(0);
    })
  };

  _calcScrollSpeed(axis, b) {
    return Phaser.Math.Difference(axis, b) * 320;
  }

  _updateScroll() {
    let cam = this.cameras.main;
    let x = Phaser.Math.Percent(this.input.x, 0, cam.width);
    let y = Phaser.Math.Percent(this.input.y, 0, cam.height);
    let minMargin = this._scrollMarginPercent;
    let maxMargin = 1 - this._scrollMarginPercent;

    if (x < minMargin) { cam.scrollX -= this._calcScrollSpeed(x, minMargin) }
    else if (x > maxMargin) { cam.scrollX += this._calcScrollSpeed(x, maxMargin) }
    if (y < minMargin) { cam.scrollY -= this._calcScrollSpeed(y, minMargin) }
    else if (y > maxMargin) { cam.scrollY += this._calcScrollSpeed(y, maxMargin) }
  }

  update() {
    // BUG: https://github.com/photonstorm/phaser/issues/3776
    if (!this.cameras.main) { return }

    this._updateScroll()
    // console.log('World Position', this.cameras.main.getWorldPoint(this.input.x, this.input.y));

  }

}

export default NavScene;