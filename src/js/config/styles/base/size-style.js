var inputStyle = require('./input-style');

module.exports = Object.assign({}, inputStyle, {
    regexp: /^(-?(0|\d+(%|px|em|vm|vh))|auto)$/
});
