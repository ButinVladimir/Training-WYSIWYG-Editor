var ColorStyle = require('../base/color-style');

/**
 * Text color style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function TextColor(jqueryCache, config){
    ColorStyle.prototype.constructor.call(this, jqueryCache, config);
}

TextColor.prototype = Object.create(ColorStyle.prototype, {});
TextColor.prototype.constructor = TextColor;

module.exports = TextColor;