var InputStyle = require('../base/input-style');

/**
 * Width style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function Width(jqueryCache, config){
    InputStyle.prototype.constructor.call(this, jqueryCache, config);
}

Width.prototype = Object.create(InputStyle.prototype, {});
Width.prototype.constructor = Width;

module.exports = Width;