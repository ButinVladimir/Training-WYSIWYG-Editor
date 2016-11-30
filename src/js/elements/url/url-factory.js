var BaseElementFactory = require('../base/base-element-factory');

/**
 * Url element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function UrlFactory(objectRegistry, styleRegistry, jqueryCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, config);

    this._defaultText = this._config.defaultText;
    this._defaultUrl = this._config.defaultUrl;
}

UrlFactory.prototype = Object.create(BaseElementFactory.prototype, {});
UrlFactory.prototype.constructor = UrlFactory;

/**
 * Render element within block
 *
 * @return {jQuery}
 */
UrlFactory.prototype.render = function(){
    $element = BaseElementFactory.prototype.render.apply(this);

    var $link = $element.children('a');
    $link.text(this._defaultText);
    $link.attr('href', this._defaultUrl);

    return $element;
};

module.exports = UrlFactory;
