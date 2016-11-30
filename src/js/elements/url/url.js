var BaseElement = require('../base/base-element'),
    styleConsts = require('../../consts/styles');

/**
 * Url element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Url(objectRegistry, styleRegistry, jqueryCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config, $element);

    this._text = this._config.defaultText;
    this._url = this._config.defaultUrl;
    this._modalTemplate = this._jqueryCache.get(this._config.modalTemplateId).children();
}

Url.prototype = Object.create(BaseElement.prototype, {});
Url.prototype.constructor = Url;

/**
 * Update element styles
 */
Url.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-url');

        this._applyCss(container.children('a'));

        container.attr('style', this._styleRegistry.get(styleConsts.STYLE_TEXT_ALIGN).toStyle());
    }
};

/**
 * Prepare modal window for update
 */
Url.prototype.prepareModalWindow = function($modalWindow){
    $modalWindow.find('.modal-body').append(this._modalTemplate.clone());
    $modalWindow.find('textarea[name=text]').val(this._text);
    $modalWindow.find('input[name=url]').val(this._url);
};

/**
 * Update element with data from modal window
 */
Url.prototype.update = function($modalWindow){
    this._text = $modalWindow.find('textarea[name=text]').val();
    this._url = $modalWindow.find('input[name=url]').val();

    var $link = this._$element.children('.block-content').children('.site-url').children('a');
    $link.text(this._text);
    $link.attr('href', this._url);
};

module.exports = Url;
