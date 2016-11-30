var selectStyle = require('../base/select-style');

module.exports = Object.assign({}, selectStyle, {
    type: require('../../../consts/styles').STYLE_BORDER_STYLE,
    title: 'Border Style',
    param: 'border-style',
    class: require('../../../styles/border/border-style'),
    items: {
        'none': 'None',
        'dashed': 'Dashed',
        'dotted': 'Dotted',
        'solid': 'Solid'
    }
});