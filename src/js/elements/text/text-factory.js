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
function TextFactory(objectRegistry, styleRegistry, jqueryCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config);

    this._default = this._config.default;
}

TextFactory.prototype = Object.create(BaseElementFactory.prototype, {});
TextFactory.prototype.constructor = TextFactory;

/**
 * Render element within block
 *
 * @return {jQuery}
 */
TextFactory.prototype.render = function(){
    $element = BaseElementFactory.prototype.render.apply(this);
    $element.text(this._default);

    return $element;
}

module.exports = TextFactory;