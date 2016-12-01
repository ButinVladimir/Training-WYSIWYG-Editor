var BaseElement = require('../base/base-element');

/**
 * Image element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Image(objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element);

    this._src = this._config.src;
}

Image.prototype = Object.create(BaseElement.prototype, {});
Image.prototype.constructor = Image;

/**
 * Update element styles
 */
Image.prototype._applyStyles = function(){
    var container = this._$element.children('.block-content').children('.site-image').children('img');

    this._applyCss(container);
};

/**
 * Prepare modal window for update
 *
 * @param {jQuery} $modalWindow
 */
Image.prototype._prepareModalWindow = function($modalWindow){
    $modalWindow.find('input[name=src]').val(this._src);
};

/**
 * Update element with data from modal window
 *
 * @param {jQuery} $modalWindow
 */
Image.prototype.update = function($modalWindow){
    this._src = $modalWindow.find('input[name=src]').val();
    this._$element.children('.block-content').children('.site-image').children('img').attr('src', this._src);
};

module.exports = Image;
