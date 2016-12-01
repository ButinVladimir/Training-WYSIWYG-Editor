var BaseStyle = require('./base-style');

/**
 * Style with color input
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function ColorStyle(templateCache, config){
    BaseStyle.prototype.constructor.call(this, templateCache, config);
}

ColorStyle.prototype = Object.create(BaseStyle.prototype, {});
ColorStyle.prototype.constructor = ColorStyle;

/**
 * Set style value
 *
 * @param {string} value
 * @param {bool} updateInput
 */
ColorStyle.prototype.setValue = function(value, updateInput){
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
ColorStyle.prototype.render = function(){
    return this._createElementContent().then((function() {
        this._$element.find('label').html(this._title);

        var $input = this._$element.find('input');
        $input.val(this._value);
        $input.attr('name', this._param);

        return this._$element;
    }).bind(this));
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