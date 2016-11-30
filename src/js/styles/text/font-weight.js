var SelectStyle = require('../base/select-style');

/**
 * Font weight style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function FontWeight(jqueryCache, config){
    SelectStyle.prototype.constructor.call(this, jqueryCache, config);
}

FontWeight.prototype = Object.create(SelectStyle.prototype, {});
FontWeight.prototype.constructor = FontWeight;

module.exports = FontWeight;