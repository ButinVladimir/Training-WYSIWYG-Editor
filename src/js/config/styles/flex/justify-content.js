var selectStyle = require('../base/select-style');

module.exports = Object.assign({}, selectStyle, {
    type: require('../../../consts/styles').STYLE_JUSTIFY_CONTENT,
    title: 'Justify Content',
    param: 'justify-content',
    class: require('../../../styles/flex/justify-content'),
    items: {
        'flex-start': 'Start',
        'flex-end': 'End',
        'center': 'Center',
        'space-between': 'Space between',
        'space-around': 'Space around'
    }
});