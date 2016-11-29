/**
 * Basic element factory
 *
 * @constructor
 */
function BaseElementFactory() {
    this._objectRegistry = ObjectRegistry.getInstance();
    this._jqueryCache = JQueryCache.getInstance();
    this._blockTemplate = this._jqueryCache.get('#block-template').children('.block-container');

    this._title = '';
    this._canBeDeleted = true;
    this._canBeMoved = true;
    this._canBeUpdated = false;
    this._template = null;
    this._supportedSubelements = [];
}

/**
 * Get instance of factory
 */
BaseElementFactory.getInstance = function() {
    throw new Error('Get instance method is not implemented');
};

/**
 * Creates element and adds it to object registry
 *
 * @return {jQuery}
 */
BaseElementFactory.prototype.create = function(){
    var $block = this._blockTemplate.clone();

    if (!this._canBeDeleted) {
        $block.find('.btn-delete').remove();
    }

    if (!this._canBeMoved) {
        $block.find('.btn-move').remove();
    }

    if (!this._canBeUpdated) {
        $block.find('.btn-update').remove();
    }

    $block.find('.block-content').append(this.render());
    var element = this.createElement($block);
    this._objectRegistry.add(element);

    return element;
};

/**
 * Create element handle
 */
BaseElementFactory.prototype.createElement = function($element){
    throw new Error('Creating element is not implemented');
};

/**
 * Render element within block
 */
BaseElementFactory.prototype.render = function(){
    throw new Error('Rendering is not implemented');
};

/**
 * Return title of element
 *
 * @return {string}
 */
BaseElementFactory.prototype.getTitle = function(){
    return this._title;
};
