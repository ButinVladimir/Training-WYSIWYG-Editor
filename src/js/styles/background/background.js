var ColorStyle = require('../base/color-style');

/**
 * Background style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function Background(jqueryCache, config){
    ColorStyle.prototype.constructor.call(this, jqueryCache, config);
}

Background.prototype = Object.create(ColorStyle.prototype, {});
Background.prototype.constructor = Background;

module.exports = Background;