var BaseElementFactory = require('../elements/base/base-element-factory');

/**
 * Registry for all element factories
 *
 * @constructor
 */
function ObjectFactoryRegistry(){
    this._collection = Object.create(null, {});
}

/**
 * Get instance of ObjectFactoryRegistry 
 *
 * @return {ObjectFactoryRegistry}
 */
ObjectFactoryRegistry.getInstance = function(){
    return ObjectFactoryRegistry._instance ? ObjectFactoryRegistry._instance : ObjectFactoryRegistry._instance = new ObjectFactoryRegistry();
};

/**
 * Add factory to registry
 *
 * @param {number} id
 * @param {BaseElementFactory} factory
 * @return {ObjectFactoryRegistry}
 */
ObjectFactoryRegistry.prototype.add = function(id, factory){
    if (!(factory instanceof BaseElementFactory)) {
        throw new Error('Factories in registry must be descendants of BaseElementFactory');
    }

    this._collection[id] = factory;

    return this;
};

/**
 * Get factory by id
 *
 * @param {number} id
 * @return {BaseElementFactory}
 */
ObjectFactoryRegistry.prototype.get = function(id){
    if (!(id in this._collection)) {
        throw new Error('Invalid factory id');
    }

    return this._collection[id];
};

module.exports = ObjectFactoryRegistry;
