/**
 * Style with color input
 *
 * @constuctor
 */
function ColorStyle(){
    BaseStyle.prototype.constructor.call(this);
}

ColorStyle.prototype = Object.create(BaseStyle.prototype, {});
ColorStyle.prototype.constructor = ColorStyle;

ColorStyle.regexp = /^-?(0|\d+(px|em|vm|vh))$/; 

/**
 * Set style value
 *
 * @param {string}
 */
ColorStyle.prototype.setValue = function(value){
    this._value = value;
    this._$element.find('input').val(value);
};

/**
 * Render style input
 *
 * @return {jQuery}
 */
ColorStyle.prototype.render = function(){
    this._$element = this._jqueryCache.get('#color-style-template').children().clone();
    this._$element.find('label').html(this._title);

    var $input = this._$element.find('input');
    $input.val(this._value);
    $input.attr('name', this._param);

    return this._$element;
};

/**
 * Style value validation
 *
 * @return {boolean}
 */
ColorStyle.prototype.validate = function(){
    return true;
    if  (!this._value.match(SizeStyle.regexp)) {
        return false;
    }

    return true;
};

/**
 * Update style value
 */
ColorStyle.prototype.updateValue = function(){
    this._value = this._$element.find('input').val();
};
