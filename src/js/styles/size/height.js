var InputStyle = require('../base/input-style');

/**
 * Height style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function Height(jqueryCache, config){
    InputStyle.prototype.constructor.call(this, jqueryCache, config);
}

Height.prototype = Object.create(InputStyle.prototype, {});
Height.prototype.constructor = Height;

module.exports = Height;