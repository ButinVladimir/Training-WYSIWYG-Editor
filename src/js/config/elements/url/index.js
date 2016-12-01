var baseElement = require('../base'),
    elementConsts = require('../../../consts/elements'),
    styleConsts = require('../../../consts/styles');

var element = Object.assign({}, baseElement, {
    title: 'Url',
    type: elementConsts.ELEMENT_URL,
    template: 'templates/elements/url.html',
    templateSelector: '.site-url',
    supportedSubelements: [
    ],
    factoryClass: require('../../../elements/url/url-factory'),
    elementClass: require('../../../elements/url/url'),
    canBeUpdated: true,
    text: 'This is sample link',
    url: 'https://google.com',
    modalTemplate: 'templates/modals/url.html',
});

element.styles = Object.create(null, {});
element.styles[styleConsts.STYLE_TEXT_COLOR] = '#2222ff';
element.styles[styleConsts.STYLE_FONT_SIZE] = '14px';
element.styles[styleConsts.STYLE_FONT_WEIGHT] = 'normal';
element.styles[styleConsts.STYLE_FONT_STYLE] = 'normal';
element.styles[styleConsts.STYLE_TEXT_DECORATION] = 'none';
element.styles[styleConsts.STYLE_TEXT_ALIGN] = 'left';

module.exports = element;