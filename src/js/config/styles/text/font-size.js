var sizeStyle = require('../base/size-style');

module.exports = Object.assign({}, sizeStyle, {
    type: require('../../../consts/styles').STYLE_FONT_SIZE,
    title: 'Font Size',
    param: 'font-size',
    class: require('../../../styles/text/font-size'),
});
