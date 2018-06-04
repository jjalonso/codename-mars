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

    addToMap(instance) {
        if (instance instanceof Phaser.GameObjects.GameObject) {
            this.children.add(instance); 
        }
        this._graph.addNode(instance.name, instance);
    }

    addLink(from, to) {
        if (!this._graph.hasNode(from.name) || !this._graph.hasNode(to.name)) {
            throw 'Location not found. Did you added it?'
        }
        this._graph.addLink(from.name, to.name);
    }

    setActor(sprite, location) {
        this._character = sprite;
        this._character.setPosition(...location.walkingPosition);
        this._currentCharLocation = location;
    }

    _calcWalkingTime(from, to) {
        let [x, y] = to.walkingPosition;
        let [fromX, fromY] = from.walkingPosition;        
        return Phaser.Math.Distance.Between(fromX, fromY, x, y) * this._walkingSpeed ;
    }

    _enterNextScene(location) {
        this._character.anims.stop('walk');
        this._isCharacterMoving = false;

        let locationScene = location.nextScene;
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

    walkTo(location) {
        if (this._isCharacterMoving) return;

        this._isCharacterMoving = true;
        let path = this._pathFinder.find(this._currentCharLocation.name, location.name).reverse();

        let tween = this.tweens.timeline({
            targets: [ this._character ],
            onComplete: () => this._enterNextScene(location),
            onStart: () => this._onTravelStarted(),
            tweens: this._buildCharacterTweens(path)
        });

        this._currentCharLocation = location;        
    }
    


}

export default MapScene;