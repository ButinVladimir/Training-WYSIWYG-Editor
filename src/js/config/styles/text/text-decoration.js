var selectStyle = require('../base/select-style');

module.exports = Object.assign({}, selectStyle, {
    type: require('../../../consts/styles').STYLE_TEXT_DECORATION,
    title: 'Text Decoration',
    param: 'text-decoration',
    class: require('../../../styles/text/text-decoration'),
    items: {
        'none': 'None',
        'line-through': 'Line through',
        'overline': 'Overline',
        'underline': 'Underline',
    }
});
