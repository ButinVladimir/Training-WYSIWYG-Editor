/**
 * Text element
 *
 * @constructor
 * @param {jQuery} $element
 * @param {Object} styles
 * @param {Array} supportedSubelements
 */
function Text($element, styles, supportedSubelements){
    BaseElement.prototype.constructor.call(this, $element, styles, supportedSubelements);

    this._type = ELEMENT_TEXT;
    this._text = config.elements.text.default;
    this._canBeUpdated = true;
    this._modalTemplate = this._jqueryCache.get('#modal-text-template').children();
}

Text.prototype = Object.create(BaseElement.prototype, {});
Text.prototype.constructor = Text;

/**
 * Update element styles
 */
Text.prototype.updateStyles = function(){
    if (this._applyStyleInputs()) {
        var container = this._$element.children('.block-content').children('.site-text');

        this._applyCss(container);
    }
};

/**
 * Prepare modal window for update
 */
Text.prototype.prepareModalWindow = function($modalWindow){
    $modalWindow.find('.modal-body').append(this._modalTemplate.clone());
    $modalWindow.find('textarea[name=text]').val(this._text);
};

/**
 * Update element with data from modal window
 */
Text.prototype.update = function($modalWindow){
    this._text = $modalWindow.find('textarea[name=text]').val();
    this._$element.children('.block-content').children('.site-text').text(this._text);
};
