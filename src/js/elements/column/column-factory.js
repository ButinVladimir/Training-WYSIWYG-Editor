var BaseElementFactory = require('../base/base-element-factory');

/**
 * Column element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function ColumnFactory(objectRegistry, styleRegistry, jqueryCache, templateCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config);
}

ColumnFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ColumnFactory.prototype.constructor = ColumnFactory;

module.exports = ColumnFactory;
