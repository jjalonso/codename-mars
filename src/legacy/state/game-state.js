import initialState from './initial-state.json';

class GameState {

    constructor() {
        this._state = null;
    }

    newState() {
        this._state = initialState;
    }

    loadState() {
        // TODO: LOAD JSON STATE FILE
    }

    saveState() {
        // TODO: SAVE JSON STATE FILE
    }

    check(key) {
        let value = this._state.conditions[key];
        console.log('value', this._state.conditions[key])
        if (value == null) { throw `'${key}' condition doesn't exist in state json. Game state corrupted?` };
        return value;
    }

    set(key) {
        this._conditions[key] = true;
    }

}

export default GameState;