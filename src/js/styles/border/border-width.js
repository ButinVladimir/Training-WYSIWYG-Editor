var InputStyle = require('../base/input-style');

/**
 * Border width style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function BorderWidth(templateCache, config){
    InputStyle.prototype.constructor.call(this, templateCache, config);
}

BorderWidth.prototype = Object.create(InputStyle.prototype, {});
BorderWidth.prototype.constructor = BorderWidth;

module.exports = BorderWidth;