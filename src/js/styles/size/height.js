/**
 * Height style
 *
 * @constuctor
 */
function Height(){
    SizeStyle.prototype.constructor.call(this);

    this._title = 'Height';
    this._param = 'height';
}

Height.prototype = Object.create(SizeStyle.prototype, {});
Height.prototype.constructor = Height;
