var BaseElement = require('../base/base-element');

/**
 * Button element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Button(objectRegistry, styleRegistry, jqueryCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config, $element);

    this._text = this._config.default;
    this._modalTemplate = this._jqueryCache.get(this._config.modalTemplateId).children();
}

Button.prototype = Object.create(BaseElement.prototype, {});
Button.prototype.constructor = Button;

/**
 * Update element styles
 */
Button.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-button').children('button');

        this._applyCss(container);
    }
};

/**
 * Prepare modal window for update
 */
Button.prototype.prepareModalWindow = function($modalWindow){
    $modalWindow.find('.modal-body').append(this._modalTemplate.clone());
    $modalWindow.find('input[name=text]').val(this._text);
};

/**
 * Update element with data from modal window
 */
Button.prototype.update = function($modalWindow){
    this._text = $modalWindow.find('input[name=text]').val();
    this._$element.children('.block-content').children('.site-button').children('button').text(this._text);
};

module.exports = Button;
