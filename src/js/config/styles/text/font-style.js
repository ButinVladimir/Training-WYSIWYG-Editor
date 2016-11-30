var selectStyle = require('../base/select-style');

module.exports = Object.assign({}, selectStyle, {
    type: require('../../../consts/styles').STYLE_FONT_STYLE,
    title: 'Font Style',
    param: 'font-style',
    class: require('../../../styles/text/font-style'),
    items: {
        'normal': 'Normal',
        'italic': 'Italic',
        'oblique': 'Oblique',
    }
});
