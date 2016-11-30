var SelectStyle = require('../base/select-style');

/**
 * Align items style
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function AlignItems(jqueryCache, config){
    SelectStyle.prototype.constructor.call(this, jqueryCache, config);
}

AlignItems.prototype = Object.create(SelectStyle.prototype, {});
AlignItems.prototype.constructor = AlignItems;

module.exports = AlignItems;