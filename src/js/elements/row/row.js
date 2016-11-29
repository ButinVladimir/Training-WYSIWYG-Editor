/**
 * Row element
 *
 * @constructor
 * @param {jQuery} $element
 * @param {Object} styles
 * @param {Array} supportedSubelements
 */
function Row($element, styles, supportedSubelements){
    BaseElement.prototype.constructor.call(this, $element, styles, supportedSubelements);

    this._type = ELEMENT_ROW;
}

Row.prototype = Object.create(BaseElement.prototype, {});
Row.prototype.constructor = Row;

/**
 * Update element styles
 */
Row.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-row');

        this._applyCss(container);

        this._$element.attr('style', this._styleRegistry.get(STYLE_BACKGROUND).toStyle());
    }
};

/**
 * Appends subelement to element
 */
Row.prototype.appendSubelement = function(subelement){
    if (subelement.getType() === ELEMENT_COLUMN) {
        if (this._$element.children('.block-content').children('.site-row').children().length >= config.elements.row.maxColumns) {
            throw new Error('Row already contains maximum amount of columns');
        }
    }

    BaseElement.prototype.appendSubelement.call(this, subelement);
};
