/**
 * Basic element
 *
 * @constructor
 * @param {jQuery} $element
 * @param {Object} styles
 */
function BaseElement($element, styles){
    this._$element = $element;
    this._objectRegistry = ObjectRegistry.getInstance();
    this._styleRegistry = StyleRegistry.getInstance();
    this._styles = styles;
    this._id = '';
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
    var objectRegistry = this._objectRegistry;

    this._$element.find('.block-container').each(function(){
        objectRegistry.get($(this).attr('id')).delete();
    });

    this._$element.remove();
};

/**
 * Set element id
 *
 * @param {string} id
 */
BaseElement.prototype.setId = function(id){
    this._id = id;
    this._$element.attr('id', id);
};

/**
 * Display style inputs
 */
BaseElement.prototype.displayInputs = function(){
    for (var styleId in this._styles) {
        this._styleRegistry.get(styleId).toggle(true).setValue(this._styles[styleId]);
    }
};

/**
 * Process style inputs
 */
BaseElement.prototype._applyInputs = function(){
    var newStyles = Object.create(null, {}), styleInput;

    for (var styleId in this._styles) {
        styleInput = this._styleRegistry.get(styleId);
        styleInput.updateValue();

        if (!styleInput.validate()) {
            alert(styleInput.getError());
            return false;
        } 

        newStyles[styleId] = styleInput.getValue();
    }

    this._styles = newStyles;
    return true;
};

/**
 * Process style inputs
 */
BaseElement.prototype._applyCss = function($element){
    var styles = [];
    for (var styleId in this._styles) {
        styles.push(this._styleRegistry.get(styleId).toStyle());
    }

    $element.attr('style', styles.join(';'));
};