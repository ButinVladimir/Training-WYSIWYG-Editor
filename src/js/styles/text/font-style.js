var SelectStyle = require('../base/select-style');

/**
 * Font style style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function FontStyle(templateCache, config){
    SelectStyle.prototype.constructor.call(this, templateCache, config);
}

FontStyle.prototype = Object.create(SelectStyle.prototype, {});
FontStyle.prototype.constructor = FontStyle;

module.exports = FontStyle;
