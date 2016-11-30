var BaseElementFactory = require('../base/base-element-factory');

/**
 * Text element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function ImageFactory(objectRegistry, styleRegistry, jqueryCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config);

    this._default = this._config.default;
}

ImageFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ImageFactory.prototype.constructor = ImageFactory;

/**
 * Render element within block
 *
 * @return {jQuery}
 */
ImageFactory.prototype.render = function(){
    $element = BaseElementFactory.prototype.render.apply(this);
    $element.children('img').attr('src', this._default);

    return $element;
};

module.exports = ImageFactory;
