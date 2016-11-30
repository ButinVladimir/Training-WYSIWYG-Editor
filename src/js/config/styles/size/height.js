var sizeStyle = require('../base/size-style');

module.exports = Object.assign({}, sizeStyle, {
    type: require('../../../consts/styles').STYLE_HEIGHT,
    title: 'Height',
    param: 'height',
    class: require('../../../styles/size/height'),
});
