var BaseElement = require('../base/base-element'),
    styleConsts = require('../../consts/styles');

/**
 * Container element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function Container(objectRegistry, styleRegistry, jqueryCache, config, $element){
    BaseElement.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config, $element);
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
Container.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-container');

        this._applyCss(container);

        this._$element.attr('style', this._styleRegistry.get(styleConsts.STYLE_BACKGROUND).toStyle());
    }
};

module.exports = Container;