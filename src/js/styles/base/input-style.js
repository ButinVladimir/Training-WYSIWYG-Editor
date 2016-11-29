/**
 * Style with text input
 *
 * @constuctor
 */
function InputStyle(){
    BaseStyle.prototype.constructor.call(this);
}

InputStyle.prototype = Object.create(BaseStyle.prototype, {});
InputStyle.prototype.constructor = InputStyle;

/**
 * Set style value
 *
 * @param {string}
 */
InputStyle.prototype.setValue = function(value){
    this._value = value;
    this._$element.find('input').val(value);
};

/**
 * Render style input
 *
 * @return {jQuery}
 */
InputStyle.prototype.render = function(){
    this._$element = this._jqueryCache.get('#input-style-template').children().clone();
    this._$element.find('label').html(this._title);

    var $input = this._$element.find('input');
    $input.val(this._value);
    $input.attr('name', this._param);

    return this._$element;
};

/**
 * Update style value
 */
InputStyle.prototype.updateValue = function(){
    this._value = this._$element.find('input').val();
};