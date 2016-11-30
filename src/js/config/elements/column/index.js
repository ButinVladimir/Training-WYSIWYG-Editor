var baseElement = require('../base'),
    elementConsts = require('../../../consts/elements'),
    styleConsts = require('../../../consts/styles');

var element = Object.assign({}, baseElement, {
    title: 'Column',
    type: elementConsts.ELEMENT_COLUMN,
    templateId: '#column-template',
    templateSelector: '.site-column',
    supportedSubelements: [
        elementConsts.ELEMENT_ROW,
        elementConsts.ELEMENT_TEXT,
        elementConsts.ELEMENT_BUTTON,
    ],
    factoryClass: require('../../../elements/column/column-factory'),
    elementClass: require('../../../elements/column/column'),
});

element.styles = Object.create(null, {});
element.styles[styleConsts.STYLE_PADDING] = '0';
element.styles[styleConsts.STYLE_BORDER_WIDTH] = '0';
element.styles[styleConsts.STYLE_BORDER_STYLE] = 'none';
element.styles[styleConsts.STYLE_BORDER_COLOR] = '#000000';
element.styles[styleConsts.STYLE_FLEX_GROW] = '0';
element.styles[styleConsts.STYLE_FLEX_SHRINK] = '1';
element.styles[styleConsts.STYLE_WIDTH] = 'auto';
element.styles[styleConsts.STYLE_HEIGHT] = 'auto';
element.styles[styleConsts.STYLE_BACKGROUND] = '#ffffff';

module.exports = element;