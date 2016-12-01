var ColorStyle = require('../base/color-style');

/**
 * Border color style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function BorderColor(templateCache, config){
    ColorStyle.prototype.constructor.call(this, templateCache, config);
}

BorderColor.prototype = Object.create(ColorStyle.prototype, {});
BorderColor.prototype.constructor = BorderColor;

module.exports = BorderColor;