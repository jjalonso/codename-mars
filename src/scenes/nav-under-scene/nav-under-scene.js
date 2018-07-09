import { Map, MapLocation } from '../../components/map';
import { PausableScene } from '../../components/scenes/pausable-scene';

class NavUnderScene extends PausableScene {

  constructor() {
    super('nav-under-scene', 'pause-scene');
    this._scrollMarginPercent = 0.05;
    this._map = null;
  }

  create() {
    const camera = this.cameras.main;

    let imagesMap = this._buildImagesMap([
      'terrain-under',
    ], 925, 537, 1);

    this._map = new Map(this, imagesMap, 0, 0);
    this._buildMapLocations(this._map);
    this._setupCameraBounds(camera, this._map, 50);
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
    let antennaLocation = new MapLocation(map, 250, 100, 'station-scene', 265, 120, 'antenna').setScale(0.5);

    // Map waypoints

    // Add them
    map.add(antennaLocation);

    // Add links

    // Set actor
    map.setActorSprite(this._createAnimActor());
    map.setActorInLocation(antennaLocation);
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
    // clean
    return images.map((imageId, index) => {
      let x = (index % rowWidth) * width;
      let y = Math.floor(index / (rowWidth)) * height;
      return this.add.image(x, y, imageId).setOrigin(0);
    })
  };

  _calcScrollSpeed(axis, b) {
    return Phaser.Math.Difference(axis, b) * 240;
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

export default NavUnderScene;