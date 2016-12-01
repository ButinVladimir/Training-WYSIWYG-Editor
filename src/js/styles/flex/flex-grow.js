var InputStyle = require('../base/input-style');

/**
 * Flex grow style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function FlexGrow(templateCache, config){
    InputStyle.prototype.constructor.call(this, templateCache, config);
}

FlexGrow.prototype = Object.create(InputStyle.prototype, {});
FlexGrow.prototype.constructor = FlexGrow;

module.exports = FlexGrow;
