var SelectStyle = require('../base/select-style');

/**
 * Text decoration style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function TextDecoration(templateCache, config){
    SelectStyle.prototype.constructor.call(this, templateCache, config);
}

TextDecoration.prototype = Object.create(SelectStyle.prototype, {});
TextDecoration.prototype.constructor = TextDecoration;

module.exports = TextDecoration;
