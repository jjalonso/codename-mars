import { ActionFactory } from '../action';
import Narration from './narration';

class NarrationFactory {

    create(data, dialogManager) {
        data = Array.isArray(data) ? data : [data];
        return data.map(item => this.createInstance(item, dialogManager));
    }

    createInstance(data, dialogManager) {
        data.actions = ActionFactory.create(data.actions, dialogManager);
        return new Narration(data, dialogManager);
    }

}

export default new NarrationFactory();