var SelectStyle = require('../base/select-style');

/**
 * Border style style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function BorderStyle(templateCache, config){
    SelectStyle.prototype.constructor.call(this, templateCache, config);
}

BorderStyle.prototype = Object.create(SelectStyle.prototype, {});
BorderStyle.prototype.constructor = BorderStyle;

module.exports = BorderStyle;