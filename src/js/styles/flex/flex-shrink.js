var InputStyle = require('../base/input-style');

/**
 * Flex shrink style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function FlexShrink(templateCache, config){
    InputStyle.prototype.constructor.call(this, templateCache, config);
}

FlexShrink.prototype = Object.create(InputStyle.prototype, {});
FlexShrink.prototype.constructor = FlexShrink;

module.exports = FlexShrink;
