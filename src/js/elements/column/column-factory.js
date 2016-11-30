var BaseElementFactory = require('../base/base-element-factory');

/**
 * Column element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function ColumnFactory(objectRegistry, styleRegistry, jqueryCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config);
}

ColumnFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ColumnFactory.prototype.constructor = ColumnFactory;

module.exports = ColumnFactory;
