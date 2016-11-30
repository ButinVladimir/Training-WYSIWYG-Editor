var baseElement = require('../base'),
    elementConsts = require('../../../consts/elements'),
    styleConsts = require('../../../consts/styles');

var element = Object.assign({}, baseElement, {
    title: 'Text',
    type: elementConsts.ELEMENT_TEXT,
    templateId: '#text-template',
    templateSelector: '.site-text',
    supportedSubelements: [
    ],
    factoryClass: require('../../../elements/text/text-factory'),
    elementClass: require('../../../elements/text/text'),
    canBeUpdated: true,
    default: 'This is sample text',
    modalTemplateId: '#modal-text-template',
});

element.styles = Object.create(null, {});
element.styles[styleConsts.STYLE_TEXT_COLOR] = '#000000';
element.styles[styleConsts.STYLE_FONT_SIZE] = '14px';
element.styles[styleConsts.STYLE_FONT_WEIGHT] = 'normal';
element.styles[styleConsts.STYLE_FONT_STYLE] = 'normal';
element.styles[styleConsts.STYLE_TEXT_DECORATION] = 'none';
element.styles[styleConsts.STYLE_TEXT_ALIGN] = 'left';

module.exports = element;