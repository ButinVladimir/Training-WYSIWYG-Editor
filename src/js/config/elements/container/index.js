var baseElement = require('../base'),
    elementConsts = require('../../../consts/elements'),
    styleConsts = require('../../../consts/styles');

var element = Object.assign({}, baseElement, {
    title: 'Container',
    type: elementConsts.ELEMENT_CONTAINER,
    template: 'templates/elements/container.html',
    templateSelector: '.site-container',
    supportedSubelements: [
        elementConsts.ELEMENT_ROW
    ],
    canBeDeleted: false,
    canBeMoved: false,
    canBeCopied: false,
    factoryClass: require('../../../elements/container/container-factory'),
    elementClass: require('../../../elements/container/container')
});

element.styles = Object.create(null, {});
element.styles[styleConsts.STYLE_PADDING] = '0';
element.styles[styleConsts.STYLE_BORDER_WIDTH] = '0';
element.styles[styleConsts.STYLE_BORDER_STYLE] = 'none';
element.styles[styleConsts.STYLE_BORDER_COLOR] = '#000000';
element.styles[styleConsts.STYLE_BACKGROUND] = '#ffffff';

module.exports = element;