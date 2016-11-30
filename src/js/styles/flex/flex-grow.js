var InputStyle = require('../base/input-style');

/**
 * Flex grow style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function FlexGrow(jqueryCache, config){
    InputStyle.prototype.constructor.call(this, jqueryCache, config);
}

FlexGrow.prototype = Object.create(InputStyle.prototype, {});
FlexGrow.prototype.constructor = FlexGrow;

module.exports = FlexGrow;
