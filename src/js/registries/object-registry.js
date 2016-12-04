var BaseElement = require('../elements/base/base-element');

/**
 * Registry for all elements
 *
 * @constructor
 */
function ObjectRegistry(){
    this._id = 0;
    this._collection = Object.create(null, {});
}

/**
 * Get instance of ObjectRegistry 
 *
 * @return {ObjectRegistry}
 */
ObjectRegistry.getInstance = function(){
    return ObjectRegistry._instance ? ObjectRegistry._instance : ObjectRegistry._instance = new ObjectRegistry();
};

/**
 * Generate id string
 *
 * @return {string}
 */
ObjectRegistry.prototype.getIdString = function(){
    return 'container-' + this._id;
};

/**
 * Add element to registry
 *
 * @param {BaseElement} element
 * @return {ObjectRegistry}
 */
ObjectRegistry.prototype.add = function(element){
    if (!(element instanceof BaseElement)) {
        throw new Error('Objects in registry must be descendants of BaseElement');
    }

    var id = this.getIdString();

    element.setId(id);
    this._collection[id] = element;

    this._id++;

    return this;
};

/**
 * Get element by id
 *
 * @param {string} id
 * @return {BaseElement}
 */
ObjectRegistry.prototype.get = function(id){
    if (!(id in this._collection)) {
        throw new Error('Invalid object id');
    }

    return this._collection[id];
};

/**
 * Recursively delete element by id
 *
 * @param {string} id
 */
ObjectRegistry.prototype.deleteRecursive = function(id){
    this._collection[id].delete();

    delete this._collection[id];
};

/**
 * Start deletion element by id
 *
 * @param {string} id
 */
ObjectRegistry.prototype.deleteStart = function(id){
    var element = this._collection[id];
        parent = element.getParent();

    parent.excludeChild(element);
    element.delete();

    delete this._collection[id];
};


module.exports = ObjectRegistry;