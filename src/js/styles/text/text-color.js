var ColorStyle = require('../base/color-style');

/**
 * Text color style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function TextColor(templateCache, config){
    ColorStyle.prototype.constructor.call(this, templateCache, config);
}

TextColor.prototype = Object.create(ColorStyle.prototype, {});
TextColor.prototype.constructor = TextColor;

module.exports = TextColor;