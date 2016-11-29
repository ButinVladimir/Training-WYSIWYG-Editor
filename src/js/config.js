var config = {
    styles: {
        sizeStyle: {
            regexp: /^(-?(0|\d+(%|px|em|vm|vh))|auto)$/
        },
        unumberStyle: {
            regexp: /^\d*(\.\d+)?$/
        },
        borderStyle: {
            items: {
                'none': 'None',
                'dashed': 'Dashed',
                'dotted': 'Dotted',
                'solid': 'Solid'
            }
        },
        justifyContent: {
            items: {
                'flex-start': 'Start',
                'flex-end': 'End',
                'center': 'Center',
                'space-between': 'Space between',
                'space-around': 'Space around'
            }
        },
        alignItems: {
            items: {
                'flex-start': 'Start',
                'flex-end': 'End',
                'center': 'Center',
                'baseline': 'Baseline',
                'stretch': 'Stretch'
            }
        },
        fontWeight: {
            items: {
                'lighter': 'Lighter',
                'normal': 'Normal',
                'bold': 'Bold',
                'bolder': 'Bolder',
            }
        },
        fontStyle: {
            items: {
                'normal': 'Normal',
                'italic': 'Italic',
                'oblique': 'Oblique',
            }
        },
        textDecoration: {
            items: {
                'none': 'None',
                'line-through': 'Line through',
                'overline': 'Overline',
                'underline': 'Underline',
            }
        },
        textAlign: {
            items: {
                'left': 'Left',
                'center': 'Center',
                'right': 'Right',
                'justify': 'Justify',
            }
        }
    },

    elements: {
        container: {
            styles: null,
            supportedSubelements: [
                ELEMENT_ROW
            ]
        },
        row: {
            styles: null,
            supportedSubelements: [
                ELEMENT_COLUMN
            ],
            maxColumns: 12
        },
        column: {
            styles: null,
            supportedSubelements: [
                ELEMENT_TEXT,
                ELEMENT_BUTTON
            ]
        },
        text: {
            styles: null,
            supportedSubelements: [
            ],
            default: 'This is sample text'
        },
        button: {
            styles: null,
            supportedSubelements: [
            ],
            default: 'Click me'
        }
    }
};

(function() {
    var containerStyles = Object.create(null, {});
    containerStyles[STYLE_PADDING] = '0';
    containerStyles[STYLE_BORDER_WIDTH] = '0';
    containerStyles[STYLE_BORDER_STYLE] = 'none';
    containerStyles[STYLE_BORDER_COLOR] = '#000000';
    containerStyles[STYLE_BORDER_COLOR] = '#000000';
    containerStyles[STYLE_BACKGROUND] = '#ffffff';
    config.elements.container.styles = containerStyles;

    var rowStyles = Object.create(null, {});
    rowStyles[STYLE_PADDING] = '0';
    rowStyles[STYLE_BORDER_WIDTH] = '0';
    rowStyles[STYLE_BORDER_STYLE] = 'none';
    rowStyles[STYLE_BORDER_COLOR] = '#000000';
    rowStyles[STYLE_JUSTIFY_CONTENT] = 'flex-start';
    rowStyles[STYLE_ALIGN_ITEMS] = 'stretch';
    rowStyles[STYLE_BACKGROUND] = '#ffffff';
    config.elements.row.styles = rowStyles;

    var columnStyles = Object.create(null, {});
    columnStyles[STYLE_PADDING] = '0';
    columnStyles[STYLE_BORDER_WIDTH] = '0';
    columnStyles[STYLE_BORDER_STYLE] = 'none';
    columnStyles[STYLE_BORDER_COLOR] = '#000000';
    columnStyles[STYLE_FLEX_GROW] = '0';
    columnStyles[STYLE_FLEX_SHRINK] = '1';
    columnStyles[STYLE_WIDTH] = 'auto';
    columnStyles[STYLE_HEIGHT] = 'auto';
    columnStyles[STYLE_BACKGROUND] = '#ffffff';
    config.elements.column.styles = columnStyles;

    var textStyles = Object.create(null, {});
    textStyles[STYLE_TEXT_COLOR] = '#000000';
    textStyles[STYLE_FONT_SIZE] = '14px';
    textStyles[STYLE_FONT_WEIGHT] = 'normal';
    textStyles[STYLE_FONT_STYLE] = 'normal';
    textStyles[STYLE_TEXT_DECORATION] = 'none';
    textStyles[STYLE_TEXT_ALIGN] = 'left';
    config.elements.text.styles = textStyles;

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
