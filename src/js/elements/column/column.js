/**
 * Column element
 *
 * @constructor
 * @param {jQuery} $element
 * @param {Object} styles
 * @param {Array} supportedSubelements
 */
function Column($element, styles, supportedSubelements){
    BaseElement.prototype.constructor.call(this, $element, styles, supportedSubelements);

    this._type = ELEMENT_COLUMN;
}

Column.prototype = Object.create(BaseElement.prototype, {});
Column.prototype.constructor = Column;

/**
 * Update element styles
 */
Column.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-column');

        this._applyCss(container);

        var elementStyles = [];
        elementStyles.push(this._styleRegistry.get(STYLE_BACKGROUND).toStyle());
        elementStyles.push(this._styleRegistry.get(STYLE_FLEX_GROW).toStyle());
        elementStyles.push(this._styleRegistry.get(STYLE_FLEX_SHRINK).toStyle());

        this._$element.attr('style', elementStyles.join(';'));
    }
};