import Phaser from 'phaser';

class Checkbox extends Phaser.GameObjects.Container {

  constructor(scene, x, y, cellSize, cols, rows, itemsBox1 = [], itemsBox2 = []) {
    super(scene, x, y);
    this._cellSize = cellSize;
    this._cols = cols;
    this._rows = rows;
    this._box1 = null;
    this._box2 = null;
    this._boxBounds1 = null;
    this._boxBounds2 = null;

    this._init(itemsBox1, itemsBox2);
  }

  _init(itemsBox1, itemsBox2) {
    this._bindEvents();
    this._build(this._cellSize * this._cols, this._cellSize * this._rows, this._cellSize);

    this._initBox(this._box1, itemsBox1);
    this._initBox(this._box2, itemsBox2);

    this._sortItems(this.itemsBox1, this._boxBounds1, this._cellSize);
    this._sortItems(this.itemsBox2, this._boxBounds2, this._cellSize);
  }

  _initBox(box, items) {
    box.setData('items', items);
    this.add(items);
  }

  _sortItems(items, boxBounds, cellSize) {
    Phaser.Actions.GridAlign(items, {
      width: boxBounds.width,
      height: boxBounds.height,
      cellWidth: cellSize,
      cellHeight: cellSize,
      x: cellSize / 2 + boxBounds.x,
      y: cellSize / 2 + boxBounds.y
    });
  }

  _bindEvents() {
    this.scene.input.on('drag', (p, item, x, y) => this._onItemDrag(p, item, x, y));
    this.scene.input.on('dragend', (p, item) => this._onItemDragEnd(p, item));
    this.scene.input.on('dragstart', (p, item) => this._onItemDragStart(p, item));
  }

  _buildBox(x, y, width, height) {
    return this.scene.add.tileSprite(x, y, width, height, 'box-cell')
      .setOrigin(0)
  }

  _getBoxBounds(box) {
    // TODO: Bug? Im creating one new rectangle because tileSprite.getBounds seems to be returning the image bound only.
    // https://github.com/photonstorm/phaser/issues/3789
    // return box.getBounds();
    return new Phaser.Geom.Rectangle(box.x, box.y, box.width, box.height);
  }

  _build(width, height) {
    this._box1 = this._buildBox(0, 0, width, height);
    this._box2 = this._buildBox(0, height + 30, width, height);
    this._boxBounds1 = this._getBoxBounds(this._box1);
    this._boxBounds2 = this._getBoxBounds(this._box2);

    this.add([this._box1, this._box2]);
  }

  _getItemInPosition(x, y) {
    return [
      ...this.itemsBox1,
      ...this.itemsBox2
    ].find(item => {
      return (item.x === x && item.y === y)
    });
  }

  _getDroppInPos(point, boxBounds, cellSize) {
    for (var x = boxBounds.x + (cellSize / 2); x <= boxBounds.width + boxBounds.x; x += cellSize) {
      for (var y = boxBounds.y + (cellSize / 2); y <= boxBounds.height + boxBounds.y; y += cellSize) {
        if (Phaser.Math.Distance.Between(point.x, point.y, x + this.x, y + this.y) <= 50 && this._getItemInPosition(x, y) === undefined) {
          return [x, y]
        }
      }
    }
  }

  _onItemDragStart(point, item) {
    this._beforeDraggingPos = [item.x, item.y];
    this.bringToTop(item);
  }

  _onItemDrag(p, item, x, y) {
    item.setPosition(x, y)
  }

  _restoreItemPos(item) {
    let [x, y] = this._beforeDraggingPos;
    item.setPosition(x, y);
  }

  _moveItemTo(item, boxBounds) {
    const toItemsArray = Object.is(boxBounds, this._boxBounds1) ? this.itemsBox1 : this.itemsBox2;
    const fromItemsArray = this.itemsBox1.includes(item) ? this.itemsBox1 : this.itemsBox2;

    if (fromItemsArray != toItemsArray) {
      toItemsArray.push(item);
      fromItemsArray.splice(fromItemsArray.indexOf(item), 1);
    }
  }

  _onItemDragEnd(point, item) {
    let droppInPos;

    [this._boxBounds1, this._boxBounds2].some(boxBounds => {
      droppInPos = this._getDroppInPos(point, boxBounds, 100);

      if (droppInPos) {
        this._moveItemTo(item, boxBounds);
      }
      return droppInPos !== undefined;
    });
    let [x, y] = droppInPos || this._beforeDraggingPos;
    item.setPosition(x, y);
    this._beforeDraggingPos = undefined;
  }

  get itemsBox1() {
    return this._box1.getData('items');
  }

  get itemsBox2() {
    return this._box2.getData('items');
  }

}

export default Checkbox;