var unumberStyle = require('../base/unumber-style');

module.exports = Object.assign({}, unumberStyle, {
    type: require('../../../consts/styles').STYLE_FLEX_GROW,
    title: 'Flex Grow',
    param: 'flex-grow',
    class: require('../../../styles/flex/flex-grow'),
});
