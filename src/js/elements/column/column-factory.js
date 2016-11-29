/**
 * Column element factory
 *
 * @constructor
 */
function ColumnFactory(){
    BaseElementFactory.prototype.constructor.call(this);

    this._title = 'Column';
    this._template = this._jqueryCache.get('#column-template').children('.site-column');
    this._supportedSubelements = config.elements.column.supportedSubelements;
}

ColumnFactory.prototype = Object.create(BaseElementFactory.prototype, {});
ColumnFactory.prototype.constructor = ColumnFactory;

/**
 * Get instance of factory
 *
 * @return {ColumnFactory}
 */
ColumnFactory.getInstance = function(){
    return ColumnFactory._instance ? ColumnFactory._instance : ColumnFactory._instance = new ColumnFactory();
};

/**
 * Create element handle
 *
 * @return {Column}
 */
ColumnFactory.prototype.createElement = function($element){

    return new Column($element, config.elements.column.styles, this._supportedSubelements);
};

/**
 * Render element within block
 *
 * @return {jQuery}
 */
ColumnFactory.prototype.render = function(){
    return this._template.clone();
};