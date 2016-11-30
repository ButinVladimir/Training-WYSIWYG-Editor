/*
var config = {
    elements: {
        button: {
            styles: null,
            supportedSubelements: [
            ],
            default: 'Click me'
        }
    }
};

(function() {


    var buttonStyles = Object.create(null, {});
    buttonStyles[STYLE_PADDING] = '0';
    buttonStyles[STYLE_BORDER_WIDTH] = '1px';
    buttonStyles[STYLE_BORDER_STYLE] = 'solid';
    buttonStyles[STYLE_BORDER_COLOR] = '#000000';
    buttonStyles[STYLE_WIDTH] = 'auto';
    buttonStyles[STYLE_HEIGHT] = 'auto';
    buttonStyles[STYLE_BACKGROUND] = '#ffffff';
    buttonStyles[STYLE_TEXT_COLOR] = '#000000';
    buttonStyles[STYLE_FONT_SIZE] = '14px';
    buttonStyles[STYLE_FONT_WEIGHT] = 'normal';
    buttonStyles[STYLE_FONT_STYLE] = 'normal';
    buttonStyles[STYLE_TEXT_DECORATION] = 'none';
    buttonStyles[STYLE_TEXT_ALIGN] = 'center';
    config.elements.button.styles = buttonStyles;
})();
*/
module.exports = {
    styles: require('./styles'),
    elements: require('./elements'),
}