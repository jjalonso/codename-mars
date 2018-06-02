import Phaser from 'phaser';

import IntroScene from './scenes/intro-scene';
import NavScene from './scenes/nav-scene';
import { AntennaScene } from './scenes/antenna-scene';


let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [IntroScene, NavScene, AntennaScene]
    // scene: [AntennaScene]

};

let game = new Phaser.Game(config);
