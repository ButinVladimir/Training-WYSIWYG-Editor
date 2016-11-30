var selectStyle = require('../base/select-style');

module.exports = Object.assign({}, selectStyle, {
    type: require('../../../consts/styles').STYLE_ALIGN_ITEMS,
    title: 'Align Items',
    param: 'align-items',
    class: require('../../../styles/flex/align-items'),
    items: {
        'flex-start': 'Start',
        'flex-end': 'End',
        'center': 'Center',
        'baseline': 'Baseline',
        'stretch': 'Stretch'
    }
});