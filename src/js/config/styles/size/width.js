var sizeStyle = require('../base/size-style');

module.exports = Object.assign({}, sizeStyle, {
    type: require('../../../consts/styles').STYLE_WIDTH,
    title: 'Width',
    param: 'width',
    class: require('../../../styles/size/width'),
});
