/**
 * Button element
 *
 * @constructor
 * @param {jQuery} $element
 * @param {Object} styles
 * @param {Array} supportedSubelements
 */
function Button($element, styles, supportedSubelements){
    BaseElement.prototype.constructor.call(this, $element, styles, supportedSubelements);

    this._type = ELEMENT_BUTTON;
    this._text = config.elements.button.default;
    this._canBeUpdated = true;
    this._modalTemplate = this._jqueryCache.get('#modal-button-template').children();
}

Button.prototype = Object.create(BaseElement.prototype, {});
Button.prototype.constructor = Button;

/**
 * Update element styles
 */
Button.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-button');

        this._applyCss(container);
    }
};

/**
 * Prepare modal window for update
 */
Button.prototype.prepareModalWindow = function($modalWindow){
    $modalWindow.find('.modal-body').append(this._modalTemplate.clone());
    $modalWindow.find('input[name=text]').val(this._text);
};

/**
 * Update element with data from modal window
 */
Button.prototype.update = function($modalWindow){
    this._text = $modalWindow.find('input[name=text]').val();
    this._$element.children('.block-content').children('.site-button').text(this._text);
};
