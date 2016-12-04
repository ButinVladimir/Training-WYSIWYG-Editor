var BaseElement = require('../base/base-element');

/**
 * Text element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Text(objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element);

    this._text = this._config.text;
}

Text.prototype = Object.create(BaseElement.prototype, {});
Text.prototype.constructor = Text;

/**
 * Update element styles
 */
Text.prototype._applyStyles = function(){
    var $container = this._$element.children('.block-content').children('.site-text');

    this._applyCss($container);
};

/**
 * Prepare modal window for update
 *
 * @param {jQuery} $modalWindow
 */
Text.prototype._prepareModalWindow = function($modalWindow){
    $modalWindow.find('textarea[name=text]').val(this._text);
};

/**
 * Update element with data from modal window
 *
 * @param {jQuery} $modalWindow
 */
Text.prototype.update = function($modalWindow){
    this._text = $modalWindow.find('textarea[name=text]').val();
    this._$element.children('.block-content').children('.site-text').text(this._text);
};

/**
 * Builds html for preview or saving
 *
 * @return {jQuery}
 */
Text.prototype.buildResultHtml = function(){
    var $element = BaseElement.prototype.buildResultHtml.call(this);

	this.toggleStyleInputs(false);
    this._applyCss($element);

    $element.text(this._text);

    return $element;
};

/**
 * Set text value
 *
 * @param {string} text
 */
Text.prototype.setText = function(text){
	this._text = text;
};

/**
 * Creates shallow clone element
 *
 * @param {jQuery} $element
 * @return {BaseElement} 
 */
Text.prototype.createClone = function($element){
    var clonedElement = new Text(this._objectRegistry, this._styleRegistry, this._jqueryCache, this._templateCache, this._config, $element);

    clonedElement.setText(this._text);

    return clonedElement;
};

module.exports = Text;
