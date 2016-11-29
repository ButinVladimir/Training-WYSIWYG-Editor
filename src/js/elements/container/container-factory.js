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

ContainerFactory.prototype.createElement = function($element){
    var styles = Object.create(null, {});
    styles[STYLE_PADDING] = '0';

    return new Container($element, styles);
};

ContainerFactory.prototype.render = function(){
    return this._template.clone();
};