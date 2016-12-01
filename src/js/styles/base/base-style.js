/**
 * Basic style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function BaseStyle(templateCache, config){
    this._templateCache = templateCache;
    this._config = config;

    this._param = this._config.param;
    this._title = this._config.title;
    this._template = this._config.template;
    this._value = '';
    this._$element = null;
}

/**
 * Set style value
 */
BaseStyle.prototype.setValue = function(value, withoutUpdate){
    throw new Error('Set style value is not implemented');
};

/**
 * Render style input
 */
BaseStyle.prototype.render = function(){
    throw new Error('Rendering is not implemented');
};

/**
 * Apply style to element
 */
BaseStyle.prototype.applyCss = function($element){
    $element.css(this._param, this._value);
};

/**
 * Style value validation
 */
BaseStyle.prototype.validate = function(){
    throw new Error('Validation is not implemented');
};

/**
 * Submit style changes
 */
BaseStyle.prototype.submit = function(){
    throw new Error('submit is not implemented');
};

/**
 * Show or hide style input
 *
 * @param {boolean} value
 */
BaseStyle.prototype.toggle = function(value){
    this._$element.toggleClass('hidden', !value);

    return this;
};

/**
 * Update style value
 */
BaseStyle.prototype.updateValue = function(){
    throw new Error('Update style value is not implemented');
};

/**
 * Get style value
 *
 * @return {string}
 */
BaseStyle.prototype.getValue = function(){
    return this._value;
};

/**
 * Return validation error message
 *
 * @return {string}
 */
BaseStyle.prototype.getError = function(){
    return "Invalid " + this._param + " value";
};

/**
 * Create element content from template
 *
 * @return {Promise}
 */
BaseStyle.prototype._createElementContent = function(){
    return this._templateCache.get(this._template).then((function(elementHtml) {
        this._$element = $(elementHtml);
    }).bind(this));
};

module.exports = BaseStyle;