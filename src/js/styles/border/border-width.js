var InputStyle = require('../base/input-style');

/**
 * Border width style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function BorderWidth(jqueryCache, config){
    InputStyle.prototype.constructor.call(this, jqueryCache, config);
}

BorderWidth.prototype = Object.create(InputStyle.prototype, {});
BorderWidth.prototype.constructor = BorderWidth;

module.exports = BorderWidth;