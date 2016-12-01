var baseElement = require('../base'),
    elementConsts = require('../../../consts/elements'),
    styleConsts = require('../../../consts/styles');

var element = Object.assign({}, baseElement, {
    title: 'Text',
    type: elementConsts.ELEMENT_TEXT,
    template: 'templates/elements/text.html',
    templateSelector: '.site-text',
    supportedSubelements: [
    ],
    factoryClass: require('../../../elements/text/text-factory'),
    elementClass: require('../../../elements/text/text'),
    canBeUpdated: true,
    text: 'This is sample text',
    modalTemplate: 'templates/modals/text.html',
});

element.styles = Object.create(null, {});
element.styles[styleConsts.STYLE_TEXT_COLOR] = '#000000';
element.styles[styleConsts.STYLE_FONT_SIZE] = '14px';
element.styles[styleConsts.STYLE_FONT_WEIGHT] = 'normal';
element.styles[styleConsts.STYLE_FONT_STYLE] = 'normal';
element.styles[styleConsts.STYLE_TEXT_DECORATION] = 'none';
element.styles[styleConsts.STYLE_TEXT_ALIGN] = 'left';

module.exports = element;