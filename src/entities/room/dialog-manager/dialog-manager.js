import { NarrationFactory } from './narration';
import { ActionFactory } from './action';


class DialogManager {

    constructor(data, registry) {
        // dev only
        registry.set('isRadioAnswered', 'false')
        // ---

        this._narrationIndex = 0;
        this._narration = null;
        this._registry = registry;
        this._data = this._build(data);

        this._getActiveNarration(this._narrationIndex);
    }
   
    _build(data) {
        for (var id in data) {
            data[id] = NarrationFactory.create(data[id], this);
        }
        return data;
    }

    _getActiveNarration(index) {
        this._narration = this._data[index].find(narration => narration.isActive);
    }

    executeAction(action) {
        action.executeSet();
        this._narrationIndex = action.next;
        this._getActiveNarration(this._narrationIndex);
    }

    get registry() {
        return this._registry;
    }

    get narration() {
        return this._narration;
    }
}

export default DialogManager;