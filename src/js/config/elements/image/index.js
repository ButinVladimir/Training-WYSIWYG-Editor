var baseElement = require('../base'),
    elementConsts = require('../../../consts/elements'),
    styleConsts = require('../../../consts/styles');

var element = Object.assign({}, baseElement, {
    title: 'Image',
    type: elementConsts.ELEMENT_IMAGE,
    templateId: '#image-template',
    templateSelector: '.site-image',
    supportedSubelements: [
    ],
    factoryClass: require('../../../elements/image/image-factory'),
    elementClass: require('../../../elements/image/image'),
    canBeUpdated: true,
    default: 'http://lapku.ru/images/42487/kak-uzanat-pochemu-krichit-kotenok.jpg',
    modalTemplateId: '#modal-image-template',
});

element.styles = Object.create(null, {});
element.styles[styleConsts.STYLE_BORDER_WIDTH] = '0px';
element.styles[styleConsts.STYLE_BORDER_STYLE] = 'none';
element.styles[styleConsts.STYLE_BORDER_COLOR] = '#000000';
element.styles[styleConsts.STYLE_WIDTH] = 'auto';
element.styles[styleConsts.STYLE_HEIGHT] = 'auto';

module.exports = element;