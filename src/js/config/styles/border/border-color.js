var colorStyle = require('../base/color-style');

module.exports = Object.assign({}, colorStyle, {
    type: require('../../../consts/styles').STYLE_BORDER_COLOR,
    title: 'Border Color',
    param: 'border-color',
    class: require('../../../styles/border/border-color')
});