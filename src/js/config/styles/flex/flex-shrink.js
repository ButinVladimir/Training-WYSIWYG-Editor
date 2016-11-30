var unumberStyle = require('../base/unumber-style');

module.exports = Object.assign({}, unumberStyle, {
    type: require('../../../consts/styles').STYLE_FLEX_SHRINK,
    title: 'Flex Shrink',
    param: 'flex-shrink',
    class: require('../../../styles/flex/flex-shrink'),
});
