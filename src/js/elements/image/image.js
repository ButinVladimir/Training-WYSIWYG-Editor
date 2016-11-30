var BaseElement = require('../base/base-element');

/**
 * Image element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Image(objectRegistry, styleRegistry, jqueryCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config, $element);

    this._src = this._config.default;
    this._modalTemplate = this._jqueryCache.get(this._config.modalTemplateId).children();
}

Image.prototype = Object.create(BaseElement.prototype, {});
Image.prototype.constructor = Image;

/**
 * Update element styles
 */
Image.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-image').children('img');

        this._applyCss(container);
    }
};

/**
 * Prepare modal window for update
 */
Image.prototype.prepareModalWindow = function($modalWindow){
    $modalWindow.find('.modal-body').append(this._modalTemplate.clone());
    $modalWindow.find('input[name=src]').val(this._src);
};

/**
 * Update element with data from modal window
 */
Image.prototype.update = function($modalWindow){
    this._src = $modalWindow.find('input[name=src]').val();
    this._$element.children('.block-content').children('.site-image').children('img').attr('src', this._src);
};

module.exports = Image;
