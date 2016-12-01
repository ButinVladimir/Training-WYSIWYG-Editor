/**
 * Basic element
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 * @param {jQuery} $element
 */
function BaseElement(objectRegistry, styleRegistry, jqueryCache, templateCache, config, $element){
    this._config = config;
    this._$element = $element;
    this._objectRegistry = objectRegistry;
    this._styleRegistry = styleRegistry;
    this._jqueryCache = jqueryCache;
    this._templateCache = templateCache;
    this._styles = Object.assign({}, this._config.styles);
    this._supportedSubelements = this._config.supportedSubelements;
    this._type = this._config.type;
    this._canBeDeleted = this._config.canBeDeleted;
    this._canBeUpdated = this._config.canBeUpdated;
    this._template = this._config.template;
    this._modalTemplate = this._config.modalTemplate;

    this.toggleStyleInputs(false);
    this._applyStyles();

    this._id = '';
    this._children = [];
    this._parent = null;
}

/**
 * Load modal window and prepare inputs
 *
 * @param {jQuery} $modalWindow
 * @return {Promise}
 */
BaseElement.prototype.loadModalWindow = function($modalWindow) {
    if (!this._modalTemplate) {
        throw new Error('Modal template does not exist');
    }

    return this._templateCache.get(this._modalTemplate).then((function(modalHtml) {
        $modalWindow.find('.modal-body').html(modalHtml);
        this._prepareModalWindow($modalWindow);

        return $modalWindow;
    }).bind(this));
}

/**
 * Prepare modal window for update
 *
 * @param {jQuery} $modalWindow
 */
BaseElement.prototype._prepareModalWindow = function(){
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
    if (this._applyStyleInputs()) {
        this._applyStyles();
    }
};

BaseElement.prototype._applyStyles = function() {
    throw new Error('Apply styles is not implemented');
}

/**
 * Delete element and all its content
 */
BaseElement.prototype.delete = function(){
    if (!this._canBeDeleted) {
        throw new Error('Element deletion is not allowed');
    }

    var objectRegistry = this._objectRegistry;
    this._children.forEach(function(child) {
        objectRegistry.delete(child.getId());
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
 * Get element id
 *
 * @return {string}
 */
BaseElement.prototype.getId = function(){
    return this._id;
    this._id = id;
    this._$element.attr('id', id);
};

/**
 * Update style values and optionally toggle style form
 */
BaseElement.prototype.toggleStyleInputs = function(toggleForm){
    var style;

    for (var styleId in this._styles) {
        style = this._styleRegistry.get(styleId);

        if (toggleForm) {
            style.toggle(true);
        }

        style.setValue(this._styles[styleId], toggleForm);
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

    Object.assign(this._styles, newStyles);
    return true;
};

/**
 * Change css of element
 *
 * @param {jQuery} $element
 */
BaseElement.prototype._applyCss = function($element){
    for (var styleId in this._styles) {
        this._styleRegistry.get(styleId).applyCss($element);
    }
};

/**
 * Iterate supported subelements
 *
 * @param {Function} callback
 */
BaseElement.prototype.iterateSupportedSubelements = function(callback){
    this._supportedSubelements.forEach(callback);
};

/**
 * Checks if subelement can be added directly
 *
 * @param {number} subelement
 * @return {boolean}
 */
BaseElement.prototype.isSupportingSubelement = function(subelement){
    return this._supportedSubelements.some(function(supportedSubelement) {
        return subelement == supportedSubelement;
    })
};

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

    this._children.push(subelement);
    this._$element.children('.block-content').children().append(subelement.getElement());
};

module.exports = BaseElement;
