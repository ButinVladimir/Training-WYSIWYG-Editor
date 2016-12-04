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
    this._canBeCopied = this._config.canBeCopied;
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
};

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
BaseElement.prototype.updateStyles = function(useInputValue){
    if (this._validateStyleInputs(useInputValue)) {
        this._applyStyleInputs();
        this._applyStyles();
    }
};

/**
 * Apply styles to edit block
 */
BaseElement.prototype._applyStyles = function(){
    throw new Error('Apply styles is not implemented');
};

/**
 * Delete element and all its content
 */
BaseElement.prototype.delete = function(){
    if (!this._canBeDeleted) {
        throw new Error('Element deletion is not allowed');
    }

    var objectRegistry = this._objectRegistry;

    this._children.forEach(function(child) {
        objectRegistry.deleteRecursive(child.getId());
    });

    this._$element.remove(); 
};

/**
 * Exclude child from children list
 *
 * @param {BaseElement} child
 */
BaseElement.prototype.excludeChild = function(child){
    this._children = this._children.filter(function(element) {
        return element !== child;
    });
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
};

/**
 * Set element parent
 *
 * @param {BaseElement} parent
 */
BaseElement.prototype.setParent = function(parent){
    this._parent = parent;
};

/**
 * Get element parent
 *
 * @return {BaseElement}
 */
BaseElement.prototype.getParent = function(){
    return this._parent;
};

/**
 * Update style values and optionally toggle style form
 *
 * @param {boolean} updateInput
 */
BaseElement.prototype.toggleStyleInputs = function(updateInput){
    var style;

    for (var styleId in this._styles) {
        style = this._styleRegistry.get(styleId);

        if (updateInput) {
            style.toggle(true);
        }

        style.setValue(this._styles[styleId], updateInput);
    }
};

/**
 * Returns result of validation
 *
 * @param {boolean} useInputValue
 * @return {boolean}
 */
BaseElement.prototype._validateStyleInputs = function(useInputValue){
    for (var styleId in this._styles) {
        styleInput = this._styleRegistry.get(styleId);

        if (useInputValue) {
            styleInput.updateValue();
        }

        if (!styleInput.validate()) {
            alert(styleInput.getError());
            return false;
        } 
    }

    return true;
};

/**
 * Process style inputs
 *
 * @return {boolean}
 */
BaseElement.prototype._applyStyleInputs = function(){
    var newStyles = Object.create(null, {}), styleInput;

    for (var styleId in this._styles) {
        newStyles[styleId] = this._styleRegistry.get(styleId).getValue();
    }

    Object.assign(this._styles, newStyles);
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
    });
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
 *
 * @param {BaseElement} subelement
 * @param {boolean} updateDom
 */
BaseElement.prototype.appendSubelement = function(subelement, updateDom){
    if (!this.isSupportingSubelement(subelement.getType())) {
        throw new Error('Subelement is not supported within element');
    }

    this._children.push(subelement);
    subelement.setParent(this);

    if (updateDom) {
        this._$element.children('.block-content').children().append(subelement.getElement());
    }
};

/**
 * Builds html for preview or saving
 *
 * @return {jQuery}
 */
BaseElement.prototype.buildResultHtml = function(){
    var $element = $(this._templateCache.getDirectly(this._template));

    return $element;
};

/**
 * Append html to result element
 *
 * @param {jQuery} $parent
 * @param {jQuery} $appendee
 * @return {jQuery}
 */
BaseElement.prototype.appendResultHtml = function($parent, $appendee){
    $parent.append($appendee);
};

/**
 * Iterate children
 *
 * @param {Function} callback
 */
BaseElement.prototype.iterateChildren = function(callback){
    this._children.forEach(callback);
};

/**
 * Deep copy of element's childrend
 *
 * @param {BaseElement} cloned element
 */
BaseElement.prototype.deepCopyChildren = function(clonedElement){
};

/**
 * Creates shallow clone element
 */
BaseElement.prototype.createClone = function(){
    throw new Error('Create clone is not supported');
};

/**
 * Get child block within element
 *
 * @param {BaseElement} child
 * @param {jQuery} $element
 * @return {jQuery}
 */
BaseElement.prototype.getChildBlock = function(child, $element){
    return $element.children('.block-content').children().children('#' + child.getId());
};

/**
 * Deep copy of element
 *
 * @param {jQuery} $element
 * @return {BaseElement}
 */
BaseElement.prototype.deepCopy = function($element){
    if (!this._canBeCopied) {
        throw new Error('Element cannot be copied');
    }

    var clonedElement = this.createClone($element);
    this._objectRegistry.add(clonedElement);

    this.toggleStyleInputs(false);
    clonedElement.updateStyles(false);

    this._children.map((function(child) {
        clonedElement.appendSubelement(child.deepCopy(this.getChildBlock(child, $element)), false);
    }).bind(this));

    return clonedElement;
};

/**
 * Starts deep copying of element
 *
 * @return {BaseElement}
 */
BaseElement.prototype.deepCopyStart = function(){
    if (!this._canBeCopied) {
        throw new Error('Element cannot be copied');
    }

    var $element = this._$element.clone();

    return this.deepCopy($element);
};

module.exports = BaseElement;
