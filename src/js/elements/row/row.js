var BaseElement = require('../base/base-element'),
    elementConsts = require('../../consts/elements'),
    styleConsts = require('../../consts/styles');

/**
 * Row element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Row(objectRegistry, styleRegistry, jqueryCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config, $element);
}

Row.prototype = Object.create(BaseElement.prototype, {});
Row.prototype.constructor = Row;

/**
 * Update element styles
 */
Row.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-row');

        this._applyCss(container);

        this._$element.attr('style', this._styleRegistry.get(styleConsts.STYLE_BACKGROUND).toStyle());
    }
};

/**
 * Appends subelement to element
 */
Row.prototype.appendSubelement = function(subelement){
    if (subelement.getType() === elementConsts.ELEMENT_COLUMN) {
        if (this._$element.children('.block-content').children('.site-row').children().length >= this._config.maxColumns) {
            throw new Error('Row already contains maximum amount of columns');
        }
    }

    BaseElement.prototype.appendSubelement.call(this, subelement);
};

module.exports = Row;
