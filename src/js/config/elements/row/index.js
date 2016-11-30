var baseElement = require('../base'),
    elementConsts = require('../../../consts/elements'),
    styleConsts = require('../../../consts/styles');

var element = Object.assign({}, baseElement, {
    title: 'Row',
    type: elementConsts.ELEMENT_ROW,
    templateId: '#row-template',
    templateSelector: '.site-row',
    supportedSubelements: [
        elementConsts.ELEMENT_COLUMN
    ],
    factoryClass: require('../../../elements/row/row-factory'),
    elementClass: require('../../../elements/row/row'),
    maxColumns: 12
});

element.styles = Object.create(null, {});
element.styles[styleConsts.STYLE_PADDING] = '0';
element.styles[styleConsts.STYLE_BORDER_WIDTH] = '0';
element.styles[styleConsts.STYLE_BORDER_STYLE] = 'none';
element.styles[styleConsts.STYLE_BORDER_COLOR] = '#000000';
element.styles[styleConsts.STYLE_JUSTIFY_CONTENT] = 'flex-start';
element.styles[styleConsts.STYLE_ALIGN_ITEMS] = 'stretch';
element.styles[styleConsts.STYLE_BACKGROUND] = '#ffffff';

module.exports = element;