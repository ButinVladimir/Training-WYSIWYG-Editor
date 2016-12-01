var BaseElementFactory = require('../base/base-element-factory');

/**
 * Row element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function RowFactory(objectRegistry, styleRegistry, jqueryCache, templateCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config);
}

RowFactory.prototype = Object.create(BaseElementFactory.prototype, {});
RowFactory.prototype.constructor = RowFactory;

module.exports = RowFactory;
