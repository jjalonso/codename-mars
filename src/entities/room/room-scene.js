import { DialogManager } from './dialog-manager';

class RoomScene extends Phaser.Scene {

    constructor(name, dialogData) {
        super(name);
        this._dialogData = dialogData;
        this._dialogManager = null;
        this._textGroup = null;

    }

    preload() {
    }

    create() {
        this._dialogUIGroup = this.add.group();
        this._dialogManager = new DialogManager(this._dialogData, this.registry);

        let narration = this._dialogManager.narration;
        this._buildDialogUI(narration);
    }

    _onActionClicked(action) {
        this._dialogManager.executeAction(action);
        let narration = this._dialogManager.narration;
        this._buildDialogUI(narration);
    }

    _buildDialogUI(narration) {
        // TODO: Use container for UI!

        this._dialogUIGroup.clear(true, true);
        this._dialogUIGroup.add(this._buildNarrationUI(narration));

        // console.log(narration.actions.map(() => this._buildActionUI(arguments)));
        // this._dialogUIGroup.addMultiple(narration.actions.map(() => this._buildActionUI(arguments)), true);
        narration.actions.forEach(
            (action, index) => this._dialogUIGroup.add(this._buildActionUI(action, index))
        )
    }

    _buildActionUI(action, index) {
        return this.add.text(100, 300 + (50 * index), action.display)
            .setInteractive()
            .on('pointerdown', () => this._onActionClicked(action));
    }

    _buildNarrationUI(narration) {
        return this.add.text(100, 100, narration.display);
    }

}

export default RoomScene;