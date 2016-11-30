var ColorStyle = require('../base/color-style');

/**
 * Border color style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function BorderColor(jqueryCache, config){
    ColorStyle.prototype.constructor.call(this, jqueryCache, config);
}

BorderColor.prototype = Object.create(ColorStyle.prototype, {});
BorderColor.prototype.constructor = BorderColor;

module.exports = BorderColor;