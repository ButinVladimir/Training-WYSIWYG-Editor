var selectStyle = require('../base/select-style');

module.exports = Object.assign({}, selectStyle, {
    type: require('../../../consts/styles').STYLE_TEXT_ALIGN,
    title: 'Text Align',
    param: 'text-align',
    class: require('../../../styles/text/text-align'),
    items: {
        'left': 'Left',
        'center': 'Center',
        'right': 'Right',
        'justify': 'Justify',
    }
});
