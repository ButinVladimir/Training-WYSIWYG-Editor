var BaseElement = require('../base/base-element'),
    styleConsts = require('../../consts/styles');

/**
 * Column element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Column(objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element);
}

Column.prototype = Object.create(BaseElement.prototype, {});
Column.prototype.constructor = Column;

/**
 * Update element styles
 */
Column.prototype._applyStyles = function(){
    var $container = this._$element.children('.block-content').children('.site-column');

    this._applyCss($container);

    this._styleRegistry.get(styleConsts.STYLE_BACKGROUND).applyCss(this._$element);
    this._styleRegistry.get(styleConsts.STYLE_FLEX_GROW).applyCss(this._$element);
    this._styleRegistry.get(styleConsts.STYLE_FLEX_SHRINK).applyCss(this._$element);
};

/**
 * Builds html for preview or saving
 *
 * @return {jQuery}
 */
Column.prototype.buildResultHtml = function(){
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
Column.prototype.createClone = function($element){
    return new Column(this._objectRegistry, this._styleRegistry, this._jqueryCache, this._templateCache, this._config, $element);
};

module.exports = Column;
