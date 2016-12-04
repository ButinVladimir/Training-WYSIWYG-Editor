var BaseElementFactory = require('../base/base-element-factory');

/**
 * Url element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function UrlFactory(objectRegistry, styleRegistry, jqueryCache, templateCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config);
}

UrlFactory.prototype = Object.create(BaseElementFactory.prototype, {});
UrlFactory.prototype.constructor = UrlFactory;

/**
 * Render element within block for editing
 *
 * @param {Object} customConfig
 * @return {Promise}
 */
UrlFactory.prototype.renderForEdit = function(customConfig){
    var config = customConfig || this._config;

    return BaseElementFactory.prototype.renderForEdit.apply(this).then((function($element) {
        var $link = $element.children('a');
        $link.text(config.text);
        $link.attr('href', config.url);

        return $element;
    }).bind(this));    
};

module.exports = UrlFactory;
