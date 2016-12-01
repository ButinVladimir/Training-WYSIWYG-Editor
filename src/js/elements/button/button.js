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
    var container = this._$element.children('.block-content').children('.site-button').children('button');

    this._applyCss(container);
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

module.exports = Button;
