/**
 * Container element factory
 *
 * @constructor
 */
function ContainerFactory(){
    BaseFactory.prototype.constructor.call(this);

    this.title = 'Container';
    this._canBeDeleted = false;
    this._template = this._jqueryCache.get('#container-template').children('.site-container');
}

ContainerFactory.prototype = Object.create(BaseFactory.prototype, {});
ContainerFactory.prototype.constructor = ContainerFactory;

ContainerFactory.getInstance = function(){
    return ContainerFactory._instance ? ContainerFactory._instance : ContainerFactory._instance = new ContainerFactory();
};

/**
 * Create element handle
 *
 * @return {Container}
 */
ContainerFactory.prototype.createElement = function($element){
    var styles = Object.create(null, {});
    styles[STYLE_PADDING] = '0';
    styles[STYLE_BORDER_WIDTH] = '0';
    styles[STYLE_BORDER_STYLE] = 'none';
    styles[STYLE_BORDER_COLOR] = '#000000';

    return new Container($element, styles);
};

/**
 * Render element within block
 *
 * @return {jQuery}
 */
ContainerFactory.prototype.render = function(){
    return this._template.clone();
};