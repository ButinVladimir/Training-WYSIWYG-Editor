var InputStyle = require('../base/input-style');

/**
 * Font size style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function FontSize(jqueryCache, config){
    InputStyle.prototype.constructor.call(this, jqueryCache, config);
}

FontSize.prototype = Object.create(InputStyle.prototype, {});
FontSize.prototype.constructor = FontSize;

module.exports = FontSize;
