/**
 * Basic element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function BaseElementFactory(objectRegistry, styleRegistry, jqueryCache, templateCache, config){
    this._objectRegistry = objectRegistry;
    this._styleRegistry = styleRegistry;
    this._jqueryCache = jqueryCache;
    this._templateCache = templateCache;
    this._config = config;
    this._blockTemplate = this._config.blockTemplate;

    this._title = this._config.title;
    this._canBeDeleted = this._config.canBeDeleted;
    this._canBeMoved = this._config.canBeMoved;
    this._canBeUpdated = this._config.canBeUpdated;
    this._template = this._config.template;
}

/**
 * Creates element and adds it to object registry
 *
 * @param {Object} customConfig
 * @return {Promise}
 */
BaseElementFactory.prototype.create = function(customConfig){
    var config = customConfig || this._config,
        $block;

    return this._templateCache.get(this._blockTemplate)
        .then((function(blockHtml) {
            $block = $(blockHtml);

            var $blockButtons = $block.children('.block-buttons');

            if (!this._canBeDeleted) {
                $blockButtons.find('.btn-delete').remove();
            }

            if (!this._canBeMoved) {
                $blockButtons.find('.btn-move').remove();
            }

            if (!this._canBeUpdated) {
                $blockButtons.find('.btn-update').remove();
            }

            if ($blockButtons.children().length === 0) {
                $blockButtons.remove();
            }

            $block.children('.block-title').text(this._title);

            return this.render(config);
        }).bind(this))
        .then((function(renderedElement){
            $block.children('.block-content').append(renderedElement);

            var element = this._createElement(config, $block);
            this._objectRegistry.add(element);

            return element;
        }).bind(this));
};

/**
 * Create element handle
 *
 * @param {Object} customConfig
 * @return {BaseElement}
 */
BaseElementFactory.prototype._createElement = function(customConfig, $element){
    return new this._config.elementClass(this._objectRegistry, this._styleRegistry, this._jqueryCache, this._templateCache, customConfig || this._config, $element);
};

/**
 * Render element within block
 *
 * @param {Object} customConfig
 * @return {Promise}
 */
BaseElementFactory.prototype.render = function(customConfig){
    return this._templateCache.get(this._template).then(function(templateHtml) {
        return $(templateHtml);
    });
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
