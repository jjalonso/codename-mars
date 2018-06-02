import { NarrationFactory } from './narration';
import Dialog from './dialog';

class DialogFactory {

    create(data) {
        data = Array.isArray(data) ? data : [data];
        return data.map(item => this.createInstance(data));
    }

    createInstance(data) {
        // Build inner narrations
        Object.keys(data).forEach(level => {
            data[level] = NarrationFactory.create(data[level]);
        });
        // Build dialog;
        return new Dialog(data);
    }

}

export default new DialogFactory();