var SelectStyle = require('../base/select-style');

/**
 * Border style style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function BorderStyle(jqueryCache, config){
    SelectStyle.prototype.constructor.call(this, jqueryCache, config);
}

BorderStyle.prototype = Object.create(SelectStyle.prototype, {});
BorderStyle.prototype.constructor = BorderStyle;

module.exports = BorderStyle;