import Action from './action';

class ActionFactory {

  create(data, dialogManager) {
    data = Array.isArray(data) ? data : [data];
    return data.map(item => this.createInstance(item, dialogManager));
  }

  createInstance(data, dialogManager) {
    return new Action(data, dialogManager);
  }

}

export default new ActionFactory();