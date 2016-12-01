var InputStyle = require('../base/input-style');

/**
 * Width style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function Width(templateCache, config){
    InputStyle.prototype.constructor.call(this, templateCache, config);
}

Width.prototype = Object.create(InputStyle.prototype, {});
Width.prototype.constructor = Width;

module.exports = Width;