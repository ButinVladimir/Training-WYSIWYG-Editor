var BaseElementFactory = require('../base/base-element-factory');

/**
 * Button element factory
 *
 * @constructor
 * @param {ObjectRegistry} objectRegistry
 * @param {StyleRegistry} styleRegistry
 * @param {JQueryCache} jqueryCache
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function ButtonFactory(objectRegistry, styleRegistry, jqueryCache, templateCache, config){
    BaseElementFactory.prototype.constructor.call(this, objectRegistry, styleRegistry, jqueryCache, templateCache, config);
}

ButtonFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ButtonFactory.prototype.constructor = ButtonFactory;

/**
 * Render element within block for editing
 *
 * @param {Object} customConfig
 * @return {Promise}
 */
ButtonFactory.prototype.renderForEdit = function(customConfig){
    var config = customConfig || this._config;

    return BaseElementFactory.prototype.renderForEdit.apply(this).then((function($element) {
        $element.children('button').text(config.text);

        return $element;
    }).bind(this));
};

module.exports = ButtonFactory;
