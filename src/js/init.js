$(function() {
    var styleRegistry = StyleRegistry.getInstance(),
        objectFactoryRegistry = ObjectFactoryRegistry.getInstance();

    styleRegistry
        .add(STYLE_PADDING, new Padding())
        .add(STYLE_BORDER_WIDTH, new BorderWidth())
        .add(STYLE_BORDER_STYLE, new BorderStyle())
        .add(STYLE_BORDER_COLOR, new BorderColor())
        .add(STYLE_JUSTIFY_CONTENT, new JustifyContent())
        .add(STYLE_ALIGN_ITEMS, new AlignItems())
        .add(STYLE_FLEX_GROW, new FlexGrow())
        .add(STYLE_FLEX_SHRINK, new FlexShrink())
        .add(STYLE_WIDTH, new Width())
        .add(STYLE_HEIGHT, new Height())
        .add(STYLE_BACKGROUND, new Background())
        .add(STYLE_TEXT_COLOR, new TextColor())
        .add(STYLE_FONT_SIZE, new FontSize())
        .add(STYLE_FONT_WEIGHT, new FontWeight())
        .add(STYLE_FONT_STYLE, new FontStyle())
        .add(STYLE_TEXT_DECORATION, new TextDecoration())
        .add(STYLE_TEXT_ALIGN, new TextAlign())
        .render();

    objectFactoryRegistry
        .add(ELEMENT_CONTAINER, ContainerFactory.getInstance())
        .add(ELEMENT_ROW, RowFactory.getInstance())
        .add(ELEMENT_COLUMN, ColumnFactory.getInstance())
        .add(ELEMENT_TEXT, TextFactory.getInstance())
        .add(ELEMENT_BUTTON, ButtonFactory.getInstance());
});