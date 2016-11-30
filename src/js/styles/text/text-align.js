var SelectStyle = require('../base/select-style');

/**
 * Text align style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function TextAlign(jqueryCache, config){
    SelectStyle.prototype.constructor.call(this, jqueryCache, config);
}

TextAlign.prototype = Object.create(SelectStyle.prototype, {});
TextAlign.prototype.constructor = TextAlign;

module.exports = TextAlign;