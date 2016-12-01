var BaseStyle = require('./base-style');

/**
 * Style with text input
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function InputStyle(templateCache, config){
    BaseStyle.prototype.constructor.call(this, templateCache, config);

    this._regexp = this._config.regexp;
}

InputStyle.prototype = Object.create(BaseStyle.prototype, {});
InputStyle.prototype.constructor = InputStyle;

/**
 * Set style value
 *
 * @param {string} value
 * @param {bool} updateInput
 */
InputStyle.prototype.setValue = function(value, updateInput){
    this._value = value;
    
    if (updateInput) {
        this._$element.find('input').val(value);
    }
};

/**
 * Render style input
 *
 * @return {Promise}
 */
InputStyle.prototype.render = function(){
    return this._createElementContent().then((function() {
        this._$element.find('label').html(this._title);

        var $input = this._$element.find('input');
        $input.val(this._value);
        $input.attr('name', this._param);

        return this._$element;
    }).bind(this));
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
