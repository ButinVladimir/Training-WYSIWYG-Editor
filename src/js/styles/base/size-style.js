/**
 * Style with text input which are expecting size
 *
 * @constuctor
 */
function SizeStyle(){
    BaseStyle.prototype.constructor.call(this);
}

SizeStyle.prototype = Object.create(BaseStyle.prototype, {});
SizeStyle.prototype.constructor = SizeStyle;

SizeStyle.regexp = /^-?(0|\d+(px|em|vm|vh))$/; 

/**
 * Set style value
 *
 * @param {string}
 */
SizeStyle.prototype.setValue = function(value){
    this._value = value;
    this._$element.find('input').val(value);
};

/**
 * Render style input
 *
 * @return {jQuery}
 */
SizeStyle.prototype.render = function(){
    this._$element = this._jqueryCache.get('#size-style-template').children().clone();
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
SizeStyle.prototype.validate = function(){
    if  (!this._value.match(SizeStyle.regexp)) {
        return false;
    }

    return true;
};

/**
 * Update style value
 */
SizeStyle.prototype.updateValue = function(){
    this._value = this._$element.find('input').val();
};
