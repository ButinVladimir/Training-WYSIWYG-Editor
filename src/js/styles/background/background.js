/**
 * Background style
 *
 * @constuctor
 */
function Background(){
    ColorStyle.prototype.constructor.call(this);

    this._title = 'Background';
    this._param = 'background-color';
}

Background.prototype = Object.create(ColorStyle.prototype, {});
Background.prototype.constructor = Background;