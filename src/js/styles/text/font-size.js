/**
 * Font size style
 *
 * @constuctor
 */
function FontSize(){
    SizeStyle.prototype.constructor.call(this);

    this._title = 'Font Size';
    this._param = 'font-size';
}

FontSize.prototype = Object.create(SizeStyle.prototype, {});
FontSize.prototype.constructor = FontSize;
