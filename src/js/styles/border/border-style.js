/**
 * Border style style
 *
 * @constuctor
 */
function BorderStyle(){
    SelectStyle.prototype.constructor.call(this);

    this._title = 'Border Style';
    this._param = 'border-style';
    this._items = {
        'none': 'None',
        'dashed': 'Dashed',
        'dotted': 'Dotted',
        'solid': 'Solid'
    };
}

BorderStyle.prototype = Object.create(SelectStyle.prototype, {});
BorderStyle.prototype.constructor = BorderStyle;