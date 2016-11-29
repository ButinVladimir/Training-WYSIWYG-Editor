/**
 * Width style
 *
 * @constuctor
 */
function Width(){
    SizeStyle.prototype.constructor.call(this);

    this._title = 'Width';
    this._param = 'width';
}

Width.prototype = Object.create(SizeStyle.prototype, {});
Width.prototype.constructor = Width;
