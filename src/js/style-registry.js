/**
 * Registry for all styles
 * @constructor
 */
function StyleRegistry(){
    this._collection = Object.create(null, {});
    this._jqueryCache = JQueryCache.getInstance();
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
 * @param {string} id
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
 * @param {string} id
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
 */
StyleRegistry.prototype.render = function(){
    var inputBlock = this._jqueryCache.get('#style-inputs');

    for (var styleId in this._collection) {
        this._collection[styleId].render().appendTo(inputBlock);
    }
};
