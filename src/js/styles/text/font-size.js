var InputStyle = require('../base/input-style');

/**
 * Font size style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function FontSize(templateCache, config){
    InputStyle.prototype.constructor.call(this, templateCache, config);
}

FontSize.prototype = Object.create(InputStyle.prototype, {});
FontSize.prototype.constructor = FontSize;

module.exports = FontSize;
