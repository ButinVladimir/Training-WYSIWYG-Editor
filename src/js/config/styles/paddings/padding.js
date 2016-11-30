var sizeStyle = require('../base/size-style');

module.exports = Object.assign({}, sizeStyle, {
    type: require('../../../consts/styles').STYLE_PADDING,
    title: 'Padding',
    param: 'padding',
    class: require('../../../styles/paddings/padding'),
});
