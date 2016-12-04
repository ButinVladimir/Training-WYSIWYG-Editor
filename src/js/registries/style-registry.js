var BaseStyle = require('../styles/base/base-style');

/**
 * Registry for all styles
 * 
 * @constructor
 */
function StyleRegistry(){
    this._collection = Object.create(null, {});
}

/**
 * Get instance of StyleRegistry 
 *
 * @return {StyleRegistry}
 */
StyleRegistry.getInstance = function(){
    return StyleRegistry._instance ? StyleRegistry._instance : StyleRegistry._instance = new StyleRegistry();
};

/**
 * Add element to registry
 *
 * @param {number} id
 * @param {BaseStyle} style
 * @return {StyleRegistry}
 */
StyleRegistry.prototype.add = function(id, style){
    if (!(style instanceof BaseStyle)) {
        throw new Error('style must be instance of BaseStyle');
    }

    this._collection[id] = style;

    return this;
};

/**
 * Get element by id
 *
 * @param {number} id
 * @return {BaseElement}
 */
StyleRegistry.prototype.get = function(id){
    if (!(id in this._collection)) {
        throw new Error('Invalid style id');
    }

    return this._collection[id];
};

/**
 * Hide all style inputs
 */
StyleRegistry.prototype.hide = function(){
    for (var styleId in this._collection) {
        this._collection[styleId].toggle(false);
    }
};

/**
 * Render all style inputs
 *
 * @param {jQuery} $inputBlock
 */
StyleRegistry.prototype.render = function($inputBlock){
    var append = function($element) {
        $element.appendTo($inputBlock);
    };

    for (var styleId in this._collection) {
        this._collection[styleId].render().then(append);
    }
};

module.exports = StyleRegistry;