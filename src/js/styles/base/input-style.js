var BaseStyle = require('./base-style');

/**
 * Style with text input
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function InputStyle(jqueryCache, config){
    BaseStyle.prototype.constructor.call(this, jqueryCache, config);

    this._regexp = this._config.regexp;
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
    this._$element = this.createElementContent();
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

/**
 * Style value validation
 *
 * @return {boolean}
 */
InputStyle.prototype.validate = function(){
    if  (!this._value.match(this.regexp)) {
        return false;
    }

    return true;
};

module.exports = InputStyle;
