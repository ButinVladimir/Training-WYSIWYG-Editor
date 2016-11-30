var BaseStyle = require('./base-style');

/**
 * Style with color input
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function ColorStyle(jqueryCache, config){
    BaseStyle.prototype.constructor.call(this, jqueryCache, config);
}

ColorStyle.prototype = Object.create(BaseStyle.prototype, {});
ColorStyle.prototype.constructor = ColorStyle;

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
    this._$element = this.createElementContent();
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
};

/**
 * Update style value
 */
ColorStyle.prototype.updateValue = function(){
    this._value = this._$element.find('input').val();
};

module.exports = ColorStyle;