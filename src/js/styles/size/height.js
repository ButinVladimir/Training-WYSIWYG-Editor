var InputStyle = require('../base/input-style');

/**
 * Height style
 *
 * @constuctor
 * @param {TemplateCache} templateCache
 * @param {Object} config
 */
function Height(templateCache, config){
    InputStyle.prototype.constructor.call(this, templateCache, config);
}

Height.prototype = Object.create(InputStyle.prototype, {});
Height.prototype.constructor = Height;

module.exports = Height;