/**
 * Border style style
 *
 * @constuctor
 */
function BorderStyle(){
    SelectStyle.prototype.constructor.call(this);

    this._title = 'Border Style';
    this._param = 'border-style';
    this._items = config.styles.borderStyle.items;
}

BorderStyle.prototype = Object.create(SelectStyle.prototype, {});
BorderStyle.prototype.constructor = BorderStyle;