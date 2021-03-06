import Phaser from 'phaser';
import { AntennaScene } from './scenes/antenna-scene';
import { IntroScene } from './scenes/intro-scene';
import { LoaderScene } from './scenes/loader-scene';
import ModuleScene from './scenes/module-scene/module-scene'; // TODO: ???
import { NavScene } from './scenes/nav-scene';
import { NavUnderScene } from './scenes/nav-under-scene';
import { PauseScene } from './scenes/pause-scene';
import { StationScene } from './scenes/station-scene';


let config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  loader: {
    path: 'assets/'
  },
  // audio: {
  //   disableWebAudio: true
  // },
  scene: [
    LoaderScene,
    IntroScene,
    PauseScene,
    NavScene,
    NavUnderScene,

    // Locations
    ModuleScene,
    StationScene,
    AntennaScene
  ]
};

let game = new Phaser.Game(config);
