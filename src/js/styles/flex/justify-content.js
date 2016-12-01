var SelectStyle = require('../base/select-style');

/**
 * Justify content style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function JustifyContent(templateCache, config){
    SelectStyle.prototype.constructor.call(this, templateCache, config);
}

JustifyContent.prototype = Object.create(SelectStyle.prototype, {});
JustifyContent.prototype.constructor = JustifyContent;

module.exports = JustifyContent;
