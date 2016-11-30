var colorStyle = require('../base/color-style');

module.exports = Object.assign({}, colorStyle, {
    type: require('../../../consts/styles').STYLE_BACKGROUND,
    title: 'Background',
    param: 'background-color',
    class: require('../../../styles/background/background')
});
