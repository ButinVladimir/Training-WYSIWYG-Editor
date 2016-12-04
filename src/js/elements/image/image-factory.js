var BaseElementFactory = require('../base/base-element-factory');

/**
 * Text element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function ImageFactory(objectRegistry, styleRegistry, jqueryCache, templateCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config);
}

ImageFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ImageFactory.prototype.constructor = ImageFactory;

/**
 * Render element within block for editing
 *
 * @param {Object} customConfig
 * @return {Promise}
 */
ImageFactory.prototype.renderForEdit = function(customConfig){
    var config = customConfig || this._config;

    return BaseElementFactory.prototype.renderForEdit.apply(this).then((function($element) {
        $element.children('img').attr('src', config.src);

        return $element;
    }).bind(this));    
};

module.exports = ImageFactory;
