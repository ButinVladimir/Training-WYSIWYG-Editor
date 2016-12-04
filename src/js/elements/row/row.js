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
 * @param {TemplateCache} templateCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Row(objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element);

    this._maxColumns = this._config.maxColumns;
}

Row.prototype = Object.create(BaseElement.prototype, {});
Row.prototype.constructor = Row;

/**
 * Update element styles
 */
Row.prototype._applyStyles = function(){
    var $container = this._$element.children('.block-content').children('.site-row');

    this._applyCss($container);

    this._styleRegistry.get(styleConsts.STYLE_BACKGROUND).applyCss(this._$element);
};

/**
 * Checks if subelement can be added directly
 *
 * @param {number} subelement
 * @return {boolean}
 */
Row.prototype.isSupportingSubelement = function(subelementType){
    if (subelementType === elementConsts.ELEMENT_COLUMN && this._children.length >= this._maxColumns) {
        return false;
    }

    return BaseElement.prototype.isSupportingSubelement.call(this, subelementType);
};

/**
 * Builds html for preview or saving
 *
 * @return {jQuery}
 */
Row.prototype.buildResultHtml = function(){
    var $element = BaseElement.prototype.buildResultHtml.call(this);

    this.toggleStyleInputs(false);
    this._applyCss($element);

    return $element;
};

/**
 * Creates shallow clone element
 *
 * @param {jQuery} $element
 * @return {BaseElement} 
 */
Row.prototype.createClone = function($element){
    return new Row(this._objectRegistry, this._styleRegistry, this._jqueryCache, this._templateCache, this._config, $element);
};

module.exports = Row;
