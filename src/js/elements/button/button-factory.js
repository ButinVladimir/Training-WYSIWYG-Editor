/**
 * Button element factory
 *
 * @constructor
 */
function ButtonFactory(){
    BaseElementFactory.prototype.constructor.call(this);

    this._title = 'Button';
    this._template = this._jqueryCache.get('#button-template').children('.site-button');
    this._supportedSubelements = config.elements.button.supportedSubelements;
    this._canBeUpdated = true;
}

ButtonFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ButtonFactory.prototype.constructor = ButtonFactory;

/**
 * Get instance of factory
 *
 * @return {ButtonFactory}
 */
ButtonFactory.getInstance = function(){
    return ButtonFactory._instance ? ButtonFactory._instance : ButtonFactory._instance = new ButtonFactory();
};

/**
 * Create element handle
 *
 * @return {Text}
 */
ButtonFactory.prototype.createElement = function($element){
    return new Button($element, config.elements.button.styles, this._supportedSubelements);
};

/**
 * Render element within block
 *
 * @return {jQuery}
 */
ButtonFactory.prototype.render = function(){
    return this._template.clone();
};