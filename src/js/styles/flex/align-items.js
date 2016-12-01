var SelectStyle = require('../base/select-style');

/**
 * Align items style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function AlignItems(templateCache, config){
    SelectStyle.prototype.constructor.call(this, templateCache, config);
}

AlignItems.prototype = Object.create(SelectStyle.prototype, {});
AlignItems.prototype.constructor = AlignItems;

module.exports = AlignItems;