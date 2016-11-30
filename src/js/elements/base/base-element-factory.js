/**
 * Basic element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function BaseElementFactory(objectRegistry, styleRegistry, jqueryCache, config){
    this._objectRegistry = objectRegistry;
    this._styleRegistry = styleRegistry;
    this._jqueryCache = jqueryCache;
    this._config = config;
    this._blockTemplate = this._jqueryCache.get('#block-template').children('.block-container');

    this._title = this._config.title;
    this._canBeDeleted = this._config.canBeDeleted;
    this._canBeMoved = this._config.canBeMoved;
    this._canBeUpdated = this._config.canBeUpdated;
    this._template = this._jqueryCache.get(this._config.templateId).children(this._config.templateSelector);
}

/**
 * Creates element and adds it to object registry
 *
 * @return {jQuery}
 */
BaseElementFactory.prototype.create = function(){
    var $block = this._blockTemplate.clone(),
        $blockButtons = $block.children('.block-buttons');

    if (!this._canBeDeleted) {
        $blockButtons.find('.btn-delete').remove();
    }

    if (!this._canBeMoved) {
        $blockButtons.find('.btn-move').remove();
    }

    if (!this._canBeUpdated) {
        $blockButtons.find('.btn-update').remove();
    }

    if ($blockButtons.children().length == 0) {
        $blockButtons.remove();
    }

    $block.children('.block-content').append(this.render());
    $block.children('.block-title').text(this._title);

    var element = this.createElement($block);
    this._objectRegistry.add(element);

    return element;
};

/**
 * Create element handle
 */
BaseElementFactory.prototype.createElement = function($element){
    return new this._config.elementClass(this._objectRegistry, this._styleRegistry, this._jqueryCache, this._config, $element);
};

/**
 * Render element within block
 *
 * @return {jQuery}
 */
BaseElementFactory.prototype.render = function(){
    return this._template.clone();
};

/**
 * Return title of element
 *
 * @return {string}
 */
BaseElementFactory.prototype.getTitle = function(){
    return this._title;
};

module.exports = BaseElementFactory;