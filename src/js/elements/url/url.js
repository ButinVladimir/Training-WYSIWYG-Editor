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
    var container = this._$element.children('.block-content').children('.site-url');

    this._applyCss(container.children('a'));

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

module.exports = Url;
