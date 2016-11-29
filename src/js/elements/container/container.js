/**
 * Container element
 *
 * @constructor
 * @param {jQuery} $element
 * @param {Object} styles
 * @param {Array} supportedSubelements
 */
function Container($element, styles, supportedSubelements){
    BaseElement.prototype.constructor.call(this, $element, styles, supportedSubelements);

    this._type = ELEMENT_CONTAINER;
    this._canBeDeleted = false;
}

Container.prototype = Object.create(BaseElement.prototype, {});
Container.prototype.constructor = Container;

/**
 * Delete element and all its content
 */
Container.prototype.delete = function(){
    throw new Error('Container cannot be deleted');
};

/**
 * Update element styles
 */
Container.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-container');

        this._applyCss(container);

        this._$element.attr('style', this._styleRegistry.get(STYLE_BACKGROUND).toStyle());
    }
};