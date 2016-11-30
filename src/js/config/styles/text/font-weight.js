var selectStyle = require('../base/select-style');

module.exports = Object.assign({}, selectStyle, {
    type: require('../../../consts/styles').STYLE_FONT_WEIGHT,
    title: 'Font Weight',
    param: 'font-weight',
    class: require('../../../styles/text/font-weight'),
    items: {
        'lighter': 'Lighter',
        'normal': 'Normal',
        'bold': 'Bold',
        'bolder': 'Bolder',
    }
});
