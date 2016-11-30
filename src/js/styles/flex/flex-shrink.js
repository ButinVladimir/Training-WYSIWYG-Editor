var InputStyle = require('../base/input-style');

/**
 * Flex shrink style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function FlexShrink(jqueryCache, config){
    InputStyle.prototype.constructor.call(this, jqueryCache, config);
}

FlexShrink.prototype = Object.create(InputStyle.prototype, {});
FlexShrink.prototype.constructor = FlexShrink;

module.exports = FlexShrink;
