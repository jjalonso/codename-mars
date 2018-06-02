// import { gameState } from '../../../state';

class Narration {

    constructor(data, dialogManager) {
        this._data = data;
        this._dialogManager = dialogManager;
    }

    get display() {
        return this._data.display;
    }

    get actions() {
        return this._data.actions.filter(action => action.isActive);
    }

    get isActive() {
        let conditions = this._data.conditions;
        let registry = this._dialogManager.registry;
        return conditions.every(condition => registry.get(condition.flag) == condition.value);
    }

}

export default Narration;