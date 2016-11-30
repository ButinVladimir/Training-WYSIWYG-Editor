var colorStyle = require('../base/color-style');

module.exports = Object.assign({}, colorStyle, {
    type: require('../../../consts/styles').STYLE_TEXT_COLOR,
    title: 'Text Color',
    param: 'color',
    class: require('../../../styles/text/text-color')
});
