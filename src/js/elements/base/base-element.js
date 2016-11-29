/**
 * Basic element
 *
 * @constructor
 * @param {jQuery} $element
 * @param {Object} styles
 * @param {Array} supportedSubelements
 */
function BaseElement($element, styles, supportedSubelements){
    this._$element = $element;
    this._objectRegistry = ObjectRegistry.getInstance();
    this._styleRegistry = StyleRegistry.getInstance();
    this._jqueryCache = JQueryCache.getInstance();
    this._styles = styles;
    this._id = '';
    this._supportedSubelements = supportedSubelements;

    this._type = null;
    this._canBeDeleted = true;
}

/**
 * Prepare modal window for update
 */
BaseElement.prototype.prepareModalWindow = function(){
    throw new Error('Prepare modal window is not implemented');
};

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
    if (!this._canBeDeleted) {
        throw new Error('Element deletion is not allowed');
    }

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
 * Process style inputs and return result of validation
 *
 * @return {boolean}
 */
BaseElement.prototype._applyStyleInputs = function(){
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

/**
 * Iterate supported subelements
 *
 * @param {Function} callback
 */
BaseElement.prototype.iterateSupportedSubelements = function(callback){
    this._supportedSubelements.forEach(callback);
}

/**
 * Checks if subelement can be added directly
 *
 * @param {number} subelement
 * @return {boolean}
 */
BaseElement.prototype.isSupportingSubelement = function(subelement){
    for (var i = 0; i < this._supportedSubelements.length; i++) {
        if (this._supportedSubelements[i] === subelement) {
            return true;
        }
    }

    return false;
}

/**
 * Returns type of element
 *
 * @return {number}
 */
BaseElement.prototype.getType = function(){
    return this._type;
};

/**
 * Returns jQuery element
 *
 * @return {jQuery}
 */
BaseElement.prototype.getElement = function(){
    return this._$element;
};

/**
 * Appends subelement to element
 */
BaseElement.prototype.appendSubelement = function(subelement){
    if (!this.isSupportingSubelement(subelement.getType())) {
        throw new Error('Subelement is not supported within element');
    }

    this._$element.children('.block-content').children().append(subelement.getElement());
};
