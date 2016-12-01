var BaseElementFactory = require('../base/base-element-factory');

/**
 * Container element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function ContainerFactory(objectRegistry, styleRegistry, jqueryCache, templateCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config);
}

ContainerFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ContainerFactory.prototype.constructor = ContainerFactory;

module.exports = ContainerFactory;
