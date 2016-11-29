/**
 * Basic element
 *
 * @constructor
 * @param {jQueryElement} $element
 * @param {ObjectRegistry} registry
 */
function Container($element, registry){
    BaseElement.constructor.call(this, $element, registry);

    this._styles = {};
}

/**
 * Delete element and all its content
 */
Container.prototype.delete = function(){
    throw new Error('Container cannot be deleted');
};