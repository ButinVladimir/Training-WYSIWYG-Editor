function Padding(){
    SizeStyle.prototype.constructor.call(this);

    this._title = 'Padding';
    this._param = 'padding';
}

Padding.prototype = Object.create(SizeStyle.prototype, {});
Padding.prototype.constructor = Padding;