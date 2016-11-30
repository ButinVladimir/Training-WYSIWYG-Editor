var SelectStyle = require('../base/select-style');

/**
 * Font style style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function FontStyle(jqueryCache, config){
    SelectStyle.prototype.constructor.call(this, jqueryCache, config);
}

FontStyle.prototype = Object.create(SelectStyle.prototype, {});
FontStyle.prototype.constructor = FontStyle;

module.exports = FontStyle;
