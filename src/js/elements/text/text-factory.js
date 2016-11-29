/**
 * Text element factory
 *
 * @constructor
 */
function TextFactory(){
    BaseElementFactory.prototype.constructor.call(this);

    this._title = 'Text';
    this._template = this._jqueryCache.get('#text-template').children('.site-text');
    this._supportedSubelements = config.elements.text.supportedSubelements;
    this._canBeUpdated = true;
}

TextFactory.prototype = Object.create(BaseElementFactory.prototype, {});
TextFactory.prototype.constructor = TextFactory;

/**
 * Get instance of factory
 *
 * @return {TextFactory}
 */
TextFactory.getInstance = function(){
    return TextFactory._instance ? TextFactory._instance : TextFactory._instance = new TextFactory();
};

/**
 * Create element handle
 *
 * @return {Text}
 */
TextFactory.prototype.createElement = function($element){
    return new Text($element, config.elements.text.styles, this._supportedSubelements);
};

/**
 * Render element within block
 *
 * @return {jQuery}
 */
TextFactory.prototype.render = function(){
    return this._template.clone();
};