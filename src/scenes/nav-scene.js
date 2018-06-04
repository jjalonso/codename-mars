import { MapScene, MapLocation, MapWaypoint } from '../entities/Map';
import { terrain, sky, mapActor, station, module, antenna } from '../assets/map-scene';

class NavScene extends MapScene {

    constructor() {
        super('NavScene');
    }

    preload() {
        // Load Images
        this.load.image('sky', sky);
        this.load.image('terrain', terrain);
        this.load.image('station', station);
        this.load.image('module', module);
        this.load.image('antenna', antenna);
        this.load.spritesheet('mapActor', mapActor, { frameWidth: 8, frameHeight: 16 });
    }

    create() {

        // TODO: LEARN HOW SCENES WORKS WHEN CHANGED, IT LOOK LIKE ARE PAUSED AND NOT DESTROYED.

        const camera = this.cameras.main;
        this.sky = this.add.image(camera.width / 2, camera.height / 2, 'sky');
        this.terrain = this.add.image(camera.width / 2, camera.height / 2, 'terrain');

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('mapActor', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        });
        
        let mapActorImage = this.add.sprite(0, 0, 'mapActor');

        let moduleLocation = new MapLocation(this, 300, 420, 'ModuleScene', 280, 400, 'module');
        let stationLocation = new MapLocation(this, 530, 270, 'StationScene', 560, 230, 'station');
        let antennaLocation = new MapLocation(this, 625, 360, 'AntennaScene', 633, 345, 'antenna').setScale(0.3);
        
        // Map waypoints
        let middleWaypoint = new MapWaypoint(this, 470, 320);
        let antennaWaypoint = new MapWaypoint(this, 610, 400);

        // Build navigation
        this.addToMap(stationLocation);
        this.addToMap(antennaLocation);
        this.addToMap(moduleLocation);
        this.addToMap(middleWaypoint);
        this.addToMap(antennaWaypoint);

        this.addLink(moduleLocation, middleWaypoint);
        this.addLink(middleWaypoint, stationLocation);
        this.addLink(middleWaypoint, antennaWaypoint);
        this.addLink(antennaWaypoint, antennaLocation);
    
        this.setActor(mapActorImage, moduleLocation);
    }

}

export default NavScene;