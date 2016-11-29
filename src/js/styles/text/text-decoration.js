/**
 * Text decoration style
 *
 * @constuctor
 */
function TextDecoration(){
    SelectStyle.prototype.constructor.call(this);

    this._title = 'Text Decoration';
    this._param = 'text-decoration';
    this._items = config.styles.textDecoration.items;
}

TextDecoration.prototype = Object.create(SelectStyle.prototype, {});
TextDecoration.prototype.constructor = TextDecoration;
