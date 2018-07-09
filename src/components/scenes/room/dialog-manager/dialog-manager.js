import { NarrationFactory } from './narration';


class DialogManager {

  constructor(scene, data, registry) {
    // dev only
    registry.set('isRadioAnswered', 'false')
    // ---

    this._narrationIndex = 0;
    this._narration = null;
    this._registry = registry;
    this._data = this._build(data);
    this._scene = scene;

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
    action.executeSetters();
    action.callback && action.callback();

    if (action.next) {
      this._narrationIndex = action.next;
      this._getActiveNarration(this._narrationIndex);
    }
  }

  get scene() {
    return this._scene;
  }

  get registry() {
    return this._registry;
  }

  get narration() {
    return this._narration;
  }
}

export default DialogManager;