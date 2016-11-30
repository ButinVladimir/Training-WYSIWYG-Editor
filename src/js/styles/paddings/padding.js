var InputStyle = require('../base/input-style');

/**
 * Padding style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function Padding(jqueryCache, config){
    InputStyle.prototype.constructor.call(this, jqueryCache, config);
}

Padding.prototype = Object.create(InputStyle.prototype, {});
Padding.prototype.constructor = Padding;

module.exports = Padding;