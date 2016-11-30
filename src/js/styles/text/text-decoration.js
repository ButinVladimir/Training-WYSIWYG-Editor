var SelectStyle = require('../base/select-style');

/**
 * Text decoration style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function TextDecoration(jqueryCache, config){
    SelectStyle.prototype.constructor.call(this, jqueryCache, config);
}

TextDecoration.prototype = Object.create(SelectStyle.prototype, {});
TextDecoration.prototype.constructor = TextDecoration;

module.exports = TextDecoration;
