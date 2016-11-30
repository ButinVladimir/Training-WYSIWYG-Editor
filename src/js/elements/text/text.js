var BaseElement = require('../base/base-element');

/**
 * Text element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Text(objectRegistry, styleRegistry, jqueryCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config, $element);

    this._text = this._config.default;
    this._modalTemplate = this._jqueryCache.get(this._config.modalTemplateId).children();
}

Text.prototype = Object.create(BaseElement.prototype, {});
Text.prototype.constructor = Text;

/**
 * Update element styles
 */
Text.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-text');

        this._applyCss(container);
    }
};

/**
 * Prepare modal window for update
 */
Text.prototype.prepareModalWindow = function($modalWindow){
    $modalWindow.find('.modal-body').append(this._modalTemplate.clone());
    $modalWindow.find('textarea[name=text]').val(this._text);
};

/**
 * Update element with data from modal window
 */
Text.prototype.update = function($modalWindow){
    this._text = $modalWindow.find('textarea[name=text]').val();
    this._$element.children('.block-content').children('.site-text').text(this._text);
};

module.exports = Text;
