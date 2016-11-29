/**
 * Container element
 *
 * @constructor
 * @param {jQuery} $element
 * @param {Object} styles
 */
function Container($element, styles){
    BaseElement.prototype.constructor.call(this, $element, styles);
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
    if (this._applyInputs()) {
        var container = this._$element.children('.block-content').children('.site-container');

        this._applyCss(container);
    }
};