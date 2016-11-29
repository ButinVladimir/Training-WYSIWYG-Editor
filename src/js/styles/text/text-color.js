/**
 * Text color style
 *
 * @constuctor
 */
function TextColor(){
    ColorStyle.prototype.constructor.call(this);

    this._title = 'Text Color';
    this._param = 'color';
}

TextColor.prototype = Object.create(ColorStyle.prototype, {});
TextColor.prototype.constructor = TextColor;
