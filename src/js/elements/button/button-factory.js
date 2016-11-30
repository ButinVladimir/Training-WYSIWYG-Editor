var BaseElementFactory = require('../base/base-element-factory');

/**
 * Button element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function ButtonFactory(objectRegistry, styleRegistry, jqueryCache, config, $element){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config, $element);

    this._default = this._config.default;
}

ButtonFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ButtonFactory.prototype.constructor = ButtonFactory;

/**
 * Render element within block
 *
 * @return {jQuery}
 */
ButtonFactory.prototype.render = function(){
    $element = BaseElementFactory.prototype.render.apply(this);
    $element.children('button').text(this._default);

    return $element;
}

module.exports = ButtonFactory;
