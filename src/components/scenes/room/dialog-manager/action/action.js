
class Action {

  constructor(data, dialogManager) {
    this._data = data;
    this._dialogManager = dialogManager;
  }

  get display() {
    return this._data.display;
  }

  get isActive() {
    let conditions = this._data.conditions;
    let registry = this._dialogManager.registry;
    return conditions.every(condition => registry.get(condition.flag) == condition.value);
  }

  get callback() {
    const scene = this._dialogManager.scene;
    return scene[this._data.callback].bind(scene); // ??? was executed before with action context
  }

  get next() {
    return this._data.next;
  }

  executeSetters() {
    let registry = this._dialogManager.registry;
    this._data.set.forEach(set => registry.set(set.flag, set.value));
  }

}

export default Action;