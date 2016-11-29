/**
 * Border color style
 *
 * @constuctor
 */
function BorderColor(){
    ColorStyle.prototype.constructor.call(this);

    this._title = 'Border Color';
    this._param = 'border-color';
}

BorderColor.prototype = Object.create(ColorStyle.prototype, {});
BorderColor.prototype.constructor = BorderColor;