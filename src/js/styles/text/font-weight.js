/**
 * Font weight style
 *
 * @constuctor
 */
function FontWeight(){
    SelectStyle.prototype.constructor.call(this);

    this._title = 'Font Weight';
    this._param = 'font-weight';
    this._items = config.styles.fontWeight.items;
}

FontWeight.prototype = Object.create(SelectStyle.prototype, {});
FontWeight.prototype.constructor = FontWeight;
