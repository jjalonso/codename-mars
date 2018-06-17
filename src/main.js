import Phaser from 'phaser';
import { AntennaScene } from './scenes/antenna-scene';
import { IntroScene } from './scenes/intro-scene';
import { LoaderScene } from './scenes/loader-scene';
import { NavScene } from './scenes/nav-scene';

let config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  loader: {
    path: 'assets/'
  },
  scene: [LoaderScene, IntroScene, NavScene, AntennaScene]
};

let game = new Phaser.Game(config);
