var SelectStyle = require('../base/select-style');

/**
 * Font weight style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function FontWeight(templateCache, config){
    SelectStyle.prototype.constructor.call(this, templateCache, config);
}

FontWeight.prototype = Object.create(SelectStyle.prototype, {});
FontWeight.prototype.constructor = FontWeight;

module.exports = FontWeight;