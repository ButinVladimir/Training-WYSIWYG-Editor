/**
 * Row element factory
 *
 * @constructor
 */
function RowFactory(){
    BaseElementFactory.prototype.constructor.call(this);

    this._title = 'Row';
    this._template = this._jqueryCache.get('#row-template').children('.site-row');
    this._supportedSubelements = config.elements.row.supportedSubelements;
}

RowFactory.prototype = Object.create(BaseElementFactory.prototype, {});
RowFactory.prototype.constructor = RowFactory;

/**
 * Get instance of factory
 *
 * @return {RowFactory}
 */
RowFactory.getInstance = function(){
    return RowFactory._instance ? RowFactory._instance : RowFactory._instance = new RowFactory();
};

/**
 * Create element handle
 *
 * @return {Row}
 */
RowFactory.prototype.createElement = function($element){
    return new Row($element, config.elements.row.styles, this._supportedSubelements);
};

/**
 * Render element within block
 *
 * @return {jQuery}
 */
RowFactory.prototype.render = function(){
    return this._template.clone();
};