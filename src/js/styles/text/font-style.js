/**
 * Font style style
 *
 * @constuctor
 */
function FontStyle(){
    SelectStyle.prototype.constructor.call(this);

    this._title = 'Font Style';
    this._param = 'font-style';
    this._items = config.styles.fontStyle.items;
}

FontStyle.prototype = Object.create(SelectStyle.prototype, {});
FontStyle.prototype.constructor = FontStyle;
