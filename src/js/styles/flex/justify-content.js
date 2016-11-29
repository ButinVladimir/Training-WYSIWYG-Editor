/**
 * Justify content style
 *
 * @constuctor
 */
function JustifyContent(){
    SelectStyle.prototype.constructor.call(this);

    this._title = 'Justify Content';
    this._param = 'justify-content';
    this._items = config.styles.justifyContent.items;
}

JustifyContent.prototype = Object.create(SelectStyle.prototype, {});
JustifyContent.prototype.constructor = JustifyContent;