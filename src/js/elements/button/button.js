var BaseElement = require('../base/base-element');

/**
 * Button element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Button(objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element);

    this._text = this._config.text;
}

Button.prototype = Object.create(BaseElement.prototype, {});
Button.prototype.constructor = Button;

/**
 * Update element styles
 */
Button.prototype._applyStyles = function(){
    var $container = this._$element.children('.block-content').children('.site-button').children('button');

    this._applyCss($container);
};

/**
 * Prepare modal window for update
 *
 * @param {jQuery} $modalWindow
 */
Button.prototype._prepareModalWindow = function($modalWindow){
    $modalWindow.find('input[name=text]').val(this._text);
};

/**
 * Update element with data from modal window
 *
 * @param {jQuery} $modalWindow
 */
Button.prototype.update = function($modalWindow){
    this._text = $modalWindow.find('input[name=text]').val();
    this._$element.children('.block-content').children('.site-button').children('button').text(this._text);
};

/**
 * Builds html for preview or saving
 *
 * @return {jQuery}
 */
Button.prototype.buildResultHtml = function(){
    var $element = BaseElement.prototype.buildResultHtml.call(this),
    	$button = $element.children('button');

	this.toggleStyleInputs(false);
    this._applyCss($button);

    $button.text(this._text);

    return $element;
};

/**
 * Set text value
 *
 * @param {string} text
 */
Button.prototype.setText = function(text){
	this._text = text;
};

/**
 * Creates shallow clone element
 *
 * @param {jQuery} $element
 * @return {BaseElement} 
 */
Button.prototype.createClone = function($element){
    var clonedElement = new Button(this._objectRegistry, this._styleRegistry, this._jqueryCache, this._templateCache, this._config, $element);

    clonedElement.setText(this._text);

    return clonedElement;
};

module.exports = Button;
