import ngraphPath from 'ngraph.path';
import ngraphGraph from 'ngraph.graph';

class MapScene extends Phaser.Scene {

    constructor(name) {
        super(name);
        this.character = null;
        this._graph = null;
        this._character = null;
        this._currentCharLocation = null;
        this._isCharacterMoving = false;
        this._walkingSpeed = 16;

        this._initGraph();
    }

    _initGraph() {
        this._graph = ngraphGraph();
        this._pathFinder = ngraphPath.aStar(this._graph);
    }

    addLocation(location) {
        this._graph.addNode(location.id, location);
        if (!location.isIntersection) {
            location.image
                .setInteractive()
                .on('pointerdown', () => this._walkTo(location))
                .on('pointerover', () => location.setHover(true))
                .on('pointerout', () => location.setHover(false));
        }
    }

    addLocationLink(fromLocation, toLocation) {
        if (!this._graph.hasNode(fromLocation.id) || !this._graph.hasNode(toLocation.id)) {
            throw 'Location not found. Did you added it?'
        }
        this._graph.addLink(fromLocation.id, toLocation.id);
    }

    setCharacter(sprite, location) {
        this._character = sprite;
        this._character.setPosition(...location.walkingPosition);
        this._currentCharLocation = location;
    }

    _calcWalkingTime(fromLocation, toLocation) {
        let [x, y] = toLocation.walkingPosition;
        let [fromLocationX, fromLocationY] = fromLocation.walkingPosition;        
        return Phaser.Math.Distance.Between(fromLocationX, fromLocationY, x, y) * this._walkingSpeed ;
    }

    _onTravelCompleted(location) {
        this._character.anims.stop('walk');
        this._isCharacterMoving = false;

        let locationScene = location.scene;
        this.scene.start(locationScene);
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

    _walkTo(location) {
        if (this._isCharacterMoving) return;

        this._isCharacterMoving = true;
        let path = this._pathFinder.find(this._currentCharLocation.id, location.id).reverse();

        let tween = this.tweens.timeline({
            targets: [ this._character ],
            onComplete: () => this._onTravelCompleted(location),
            onStart: () => this._onTravelStarted(),
            tweens: this._buildCharacterTweens(path)
        });

        this._currentCharLocation = location;        
    }
    


}

export default MapScene;