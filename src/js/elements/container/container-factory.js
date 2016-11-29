/**
 * Container element factory
 *
 * @constructor
 */
function ContainerFactory(){
    BaseElementFactory.prototype.constructor.call(this);

    this._title = 'Container';
    this._template = this._jqueryCache.get('#container-template').children('.site-container');
    this._supportedSubelements = config.elements.container.supportedSubelements;
    this._canBeDeleted = false;
    this._canBeMoved = false;
}

ContainerFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ContainerFactory.prototype.constructor = ContainerFactory;

/**
 * Get instance of factory
 *
 * @return {ContainerFactory}
 */
ContainerFactory.getInstance = function(){
    return ContainerFactory._instance ? ContainerFactory._instance : ContainerFactory._instance = new ContainerFactory();
};

/**
 * Create element handle
 *
 * @return {Container}
 */
ContainerFactory.prototype.createElement = function($element){
    return new Container($element, config.elements.container.styles, this._supportedSubelements);
};

/**
 * Render element within block
 *
 * @return {jQuery}
 */
ContainerFactory.prototype.render = function(){
    return this._template.clone();
};