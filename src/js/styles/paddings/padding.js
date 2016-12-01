var InputStyle = require('../base/input-style');

/**
 * Padding style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function Padding(templateCache, config){
    InputStyle.prototype.constructor.call(this, templateCache, config);
}

Padding.prototype = Object.create(InputStyle.prototype, {});
Padding.prototype.constructor = Padding;

module.exports = Padding;