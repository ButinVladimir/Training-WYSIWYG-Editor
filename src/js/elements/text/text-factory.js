var BaseElementFactory = require('../base/base-element-factory');

/**
 * Text element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function TextFactory(objectRegistry, styleRegistry, jqueryCache, templateCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config);
}

TextFactory.prototype = Object.create(BaseElementFactory.prototype, {});
TextFactory.prototype.constructor = TextFactory;

/**
 * Render element within block
 *
 * @param {Object} customConfig
 * @return {Promise}
 */
TextFactory.prototype.render = function(customConfig){
    var config = customConfig || this._config;

    return BaseElementFactory.prototype.render.apply(this).then((function($element) {
        $element.text(config.text);

        return $element;
    }).bind(this));    
};

module.exports = TextFactory;
