var sizeStyle = require('../base/size-style');

module.exports = Object.assign({}, sizeStyle, {
    type: require('../../../consts/styles').STYLE_BORDER_WIDTH,
    title: 'Border Width',
    param: 'border-width',
    class: require('../../../styles/border/border-width'),
});
