/**
 * Text align style
 *
 * @constuctor
 */
function TextAlign(){
    SelectStyle.prototype.constructor.call(this);

    this._title = 'Text Align';
    this._param = 'text-align';
    this._items = config.styles.textAlign.items;
}

TextAlign.prototype = Object.create(SelectStyle.prototype, {});
TextAlign.prototype.constructor = TextAlign;
