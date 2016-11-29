/**
 * Align items style
 *
 * @constuctor
 */
function AlignItems(){
    SelectStyle.prototype.constructor.call(this);

    this._title = 'Align Items';
    this._param = 'align-items';
    this._items = config.styles.alignItems.items;
}

AlignItems.prototype = Object.create(SelectStyle.prototype, {});
AlignItems.prototype.constructor = AlignItems;