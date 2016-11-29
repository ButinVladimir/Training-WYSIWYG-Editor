/**
 * Basic element factory
 *
 * @constructor
 */
function BaseFactory() {
    this.title = '';
    this._canBeDeleted = true;
    this._template = null;

    this._objectRegistry = ObjectRegistry.getInstance();
    this._jqueryCache = JQueryCache.getInstance();
    this._blockTemplate = this._jqueryCache.get('#block-template').children('.block-container');
}

/**
 * Get instance of factory
 */
BaseFactory.getInstance = function() {
    throw new Error('Get instance method is not implemented');
};

/**
 * Creates element and adds it to object registry
 *
 * @return {jQuery}
 */
BaseFactory.prototype.create = function(){
    var $block = this._blockTemplate.clone();

    if (!this._canBeDeleted) {
        $block.find('.btn-delete').remove();
    }

    $block.find('.block-content').append(this.render());
    var element = this.createElement($block);
    this._objectRegistry.add(element);
    return $block;
};

/**
 * Create element handle
 */
BaseFactory.prototype.createElement = function($element){
    throw new Error('Creating element is not implemented');
};

/**
 * Render element within block
 */
BaseFactory.prototype.render = function(){
    throw new Error('Rendering is not implemented');
};