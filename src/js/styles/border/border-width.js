/**
 * Border width style
 *
 * @constuctor
 */
function BorderWidth(){
    SizeStyle.prototype.constructor.call(this);

    this._title = 'Border Width';
    this._param = 'border-width';
}

BorderWidth.prototype = Object.create(SizeStyle.prototype, {});
BorderWidth.prototype.constructor = BorderWidth;