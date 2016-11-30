var SelectStyle = require('../base/select-style');

/**
 * Justify content style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function JustifyContent(jqueryCache, config){
    SelectStyle.prototype.constructor.call(this, jqueryCache, config);
}

JustifyContent.prototype = Object.create(SelectStyle.prototype, {});
JustifyContent.prototype.constructor = JustifyContent;

module.exports = JustifyContent;
