var BaseElement = require('../base/base-element'),
    styleConsts = require('../../consts/styles');

/**
 * Url element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Url(objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element);

    this._text = this._config.text;
    this._url = this._config.url;
}

Url.prototype = Object.create(BaseElement.prototype, {});
Url.prototype.constructor = Url;

/**
 * Update element styles
 */
Url.prototype._applyStyles = function(){
    var $container = this._$element.children('.block-content').children('.site-url');

    this._applyCss($container.children('a'));

    this._styleRegistry.get(styleConsts.STYLE_TEXT_ALIGN).applyCss(this._$element);
};

/**
 * Prepare modal window for update
 *
 * @param {jQuery} $modalWindow
 */
Url.prototype._prepareModalWindow = function($modalWindow){
    $modalWindow.find('textarea[name=text]').val(this._text);
    $modalWindow.find('input[name=url]').val(this._url);
};

/**
 * Update element with data from modal window
 *
 * @param {jQuery} $modalWindow
 */
Url.prototype.update = function($modalWindow){
    this._text = $modalWindow.find('textarea[name=text]').val();
    this._url = $modalWindow.find('input[name=url]').val();

    var $link = this._$element.children('.block-content').children('.site-url').children('a');
    $link.text(this._text);
    $link.attr('href', this._url);
};

/**
 * Builds html for preview or saving
 *
 * @return {jQuery}
 */
Url.prototype.buildResultHtml = function(){
    var $element = BaseElement.prototype.buildResultHtml.call(this),
        $link = $element.children('a');

    this.toggleStyleInputs(false);
    this._applyCss($link);
    this._styleRegistry.get(styleConsts.STYLE_TEXT_ALIGN).applyCss($element);

    $link.text(this._text);
    $link.attr('href', this._url);

    return $element;
};

/**
 * Set text value
 *
 * @param {string} text
 */
Url.prototype.setText = function(text){
    this._text = text;
};

/**
 * Set url value
 *
 * @param {string} url
 */
Url.prototype.setUrl = function(url){
    this._url = url;
};

/**
 * Creates shallow clone element
 *
 * @param {jQuery} $element
 * @return {BaseElement} 
 */
Url.prototype.createClone = function($element){
    var clonedElement = new Url(this._objectRegistry, this._styleRegistry, this._jqueryCache, this._templateCache, this._config, $element);

    clonedElement.setText(this._text);
    clonedElement.setUrl(this._url);

    return clonedElement;
};

module.exports = Url;
