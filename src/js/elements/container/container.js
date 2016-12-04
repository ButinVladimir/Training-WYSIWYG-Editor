var BaseElement = require('../base/base-element'),
    styleConsts = require('../../consts/styles');

/**
 * Container element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Container(objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element);
}

Container.prototype = Object.create(BaseElement.prototype, {});
Container.prototype.constructor = Container;

/**
 * Delete element and all its content
 */
Container.prototype.delete = function(){
    throw new Error('Container cannot be deleted');
};

/**
 * Update element styles
 */
Container.prototype._applyStyles = function(){
    var $container = this._$element.children('.block-content').children('.site-container');

    this._applyCss($container);

    this._styleRegistry.get(styleConsts.STYLE_BACKGROUND).applyCss(this._$element);
};

/**
 * Builds html for preview or saving
 *
 * @return {jQuery}
 */
Container.prototype.buildResultHtml = function(){
    var $element = BaseElement.prototype.buildResultHtml.call(this);

	this.toggleStyleInputs(false);
    this._applyCss($element);

    return $element;
};

module.exports = Container;
