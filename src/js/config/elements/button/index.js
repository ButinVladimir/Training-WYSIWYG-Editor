var baseElement = require('../base'),
    elementConsts = require('../../../consts/elements'),
    styleConsts = require('../../../consts/styles');

var element = Object.assign({}, baseElement, {
    title: 'Button',
    type: elementConsts.ELEMENT_BUTTON,
    templateId: '#button-template',
    templateSelector: '.site-button',
    supportedSubelements: [
    ],
    factoryClass: require('../../../elements/button/button-factory'),
    elementClass: require('../../../elements/button/button'),
    canBeUpdated: true,
    default: 'Click me',
    modalTemplateId: '#modal-button-template',
});

element.styles = Object.create(null, {});
element.styles[styleConsts.STYLE_PADDING] = '0';
element.styles[styleConsts.STYLE_BORDER_WIDTH] = '1px';
element.styles[styleConsts.STYLE_BORDER_STYLE] = 'solid';
element.styles[styleConsts.STYLE_BORDER_COLOR] = '#000000';
element.styles[styleConsts.STYLE_WIDTH] = 'auto';
element.styles[styleConsts.STYLE_HEIGHT] = 'auto';
element.styles[styleConsts.STYLE_BACKGROUND] = '#ffffff';
element.styles[styleConsts.STYLE_TEXT_COLOR] = '#000000';
element.styles[styleConsts.STYLE_FONT_SIZE] = '14px';
element.styles[styleConsts.STYLE_FONT_WEIGHT] = 'normal';
element.styles[styleConsts.STYLE_FONT_STYLE] = 'normal';
element.styles[styleConsts.STYLE_TEXT_DECORATION] = 'none';
element.styles[styleConsts.STYLE_TEXT_ALIGN] = 'center';

module.exports = element;