/**
 * Basic element
 *
 * @constructor
 * @param {jQueryElement} $element
 * @param {ObjectRegistry} registry
 */
function BaseElement($element, registry){
    this._$element = $element;
    this._registry = registry;
    this._id = '';
    this._styles = {};
}

/**
 * Update element
 */
BaseElement.prototype.update = function(){
    throw new Error('Update is not implemented');
};

/**
 * Update element styles
 */
BaseElement.prototype.updateStyles = function(){
    throw new Error('Update styles is not implemented');
};

/**
 * Delete element and all its content
 */
BaseElement.prototype.delete = function(){
    var registry = this._registry;

    $element.find('.block-container').each(function(){
        registry.get($(this).prop('id')).delete();
    });

    $element.remove();
};

/**
 * Set element id
 *
 * @param {string} id
 */
BaseElement.prototype.setId = function(id){
    this._id = id;
    this.$element.prop('id', id);
};