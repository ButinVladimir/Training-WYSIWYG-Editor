var BaseElement = require('../base/base-element'),
    styleConsts = require('../../consts/styles');

/**
 * Column element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Column(objectRegistry, styleRegistry, jqueryCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config, $element);
}

Column.prototype = Object.create(BaseElement.prototype, {});
Column.prototype.constructor = Column;

/**
 * Update element styles
 */
Column.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-column');

        this._applyCss(container);

        var elementStyles = [];
        elementStyles.push(this._styleRegistry.get(styleConsts.STYLE_BACKGROUND).toStyle());
        elementStyles.push(this._styleRegistry.get(styleConsts.STYLE_FLEX_GROW).toStyle());
        elementStyles.push(this._styleRegistry.get(styleConsts.STYLE_FLEX_SHRINK).toStyle());

        this._$element.attr('style', elementStyles.join(';'));
    }
};

module.exports = Column;
