var SelectStyle = require('../base/select-style');

/**
 * Text align style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function TextAlign(templateCache, config){
    SelectStyle.prototype.constructor.call(this, templateCache, config);
}

TextAlign.prototype = Object.create(SelectStyle.prototype, {});
TextAlign.prototype.constructor = TextAlign;

module.exports = TextAlign;