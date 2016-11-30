var BaseStyle = require('./base-style');

/**
 * Style with select input
 *
 * @constuctor
 * @param {JQueryCache} jqueryCache
 * @param {Object} config
 */
function SelectStyle(jqueryCache, config){
    BaseStyle.prototype.constructor.call(this, jqueryCache, config);

    this._items = this._config.items;
}

SelectStyle.prototype = Object.create(BaseStyle.prototype, {});
SelectStyle.prototype.constructor = SelectStyle;

/**
 * Set style value
 *
 * @param {string}
 */
SelectStyle.prototype.setValue = function(value){
    if (!(value in this._items)) {
        throw new Error('Invalid value');
    }

    this._value = value;
    this._$element.find('select').val(value);
};

/**
 * Render style input
 *
 * @return {jQuery}
 */
SelectStyle.prototype.render = function(){
    this._$element = this.createElementContent();
    this._$element.find('label').html(this._title);

    var $select = this._$element.find('select');
    for (var itemValue in this._items) {
        $select.append($('<option>', {value: itemValue, text: this._items[itemValue]}));
    }

    $select.val(this._value);
    $select.attr('name', this._param);

    return this._$element;
};

/**
 * Style value validation
 *
 * @return {boolean}
 */
SelectStyle.prototype.validate = function(){
    if  (!(this._value in this._items)) {
        return false;
    }

    return true;
};

/**
 * Update style value
 */
SelectStyle.prototype.updateValue = function(){
    this._value = this._$element.find('select').val();
};

module.exports = SelectStyle;