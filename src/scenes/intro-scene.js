import { introBg } from '../assets/intro-scene';
import NavScene from './nav-scene'

class IntroScene extends Phaser.Scene {

    constructor() {
        super('IntroScene');
    }

    preload() {
        this.load.image('background', introBg);
    }

    create() {
        const camera = this.cameras.main;
        this.add.image(camera.width / 2, camera.height / 2, 'background');
    }

    update() {
        if (this.input.activePointer.isDown) {
            this.scene.start('NavScene')
        }        
    }
}

export default IntroScene;