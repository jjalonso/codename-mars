import { MapScene, MapLocation} from '../entities/Map';
import { terrain, sky, mapCharacter, station, module, antenna } from '../assets/map-scene';

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
        this.load.spritesheet('mapCharacter', mapCharacter, { frameWidth: 8, frameHeight: 16 });
    }

    create() {

        // TODO: LEARN HOW WORK THE SCENES WHEN CHANGED, IT LOOK LIKE ARE PAUSED AND NOT DESTROYED.

        const camera = this.cameras.main;
        this.sky = this.add.image(camera.width / 2, camera.height / 2, 'sky');
        this.terrain = this.add.image(camera.width / 2, camera.height / 2, 'terrain');

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('mapCharacter', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        });
        
        // Add images to scene
        let characterImage = this.add.sprite(0, 0, 'mapCharacter');
        let stationImage = this.add.image(560, 230, 'station');
        let antennaImage = this.add.image(633, 345, 'antenna').setScale(0.3);
        let moduleImage = this.add.image(280, 400, 'module')

        // Create locations
        let stationLocation = new MapLocation('station', stationImage, 530, 270, 'IntroScene');
        let antennaLocation = new MapLocation('antenna', antennaImage, 625, 360, 'AntennaScene');
        let moduleLocation = new MapLocation('module', moduleImage, 300, 420, 'IntroScene');
        
        // Dummy Locations (For navigation purpose)
        let intersectionLocation = new MapLocation('intersection', null, 470, 320);
        let antennaEntranceLocation = new MapLocation('antennaEntrance', null, 610, 400);

        // Build navigation
        this.addLocation(stationLocation);
        this.addLocation(antennaLocation);
        this.addLocation(moduleLocation);
        this.addLocation(intersectionLocation);
        this.addLocation(antennaEntranceLocation);

        this.addLocationLink(moduleLocation, intersectionLocation);
        this.addLocationLink(intersectionLocation, stationLocation);        
        this.addLocationLink(intersectionLocation, antennaEntranceLocation);
        this.addLocationLink(antennaEntranceLocation, antennaLocation);

        this.setCharacter(characterImage, moduleLocation);
    }

}

export default NavScene;