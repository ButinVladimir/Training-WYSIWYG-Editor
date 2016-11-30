var inputStyle = require('./input-style');

module.exports = Object.assign({}, inputStyle, {
    regexp: /^\d*(\.\d+)?$/
});
