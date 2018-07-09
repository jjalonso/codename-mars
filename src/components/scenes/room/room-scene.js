import { PausableScene } from '../pausable-scene';
import { DialogManager } from './dialog-manager';

class RoomScene extends PausableScene {

  constructor(name, pauseSceneId, dialogData) {
    super(name, pauseSceneId);
    this._dialogData = dialogData;
    this._dialogManager = null;
    this._textGroup = null;

  }

  create() {
    this._dialogUIGroup = this.add.group();
    this._dialogManager = new DialogManager(this, this._dialogData, this.registry);

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