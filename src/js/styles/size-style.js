function SizeStyle(){
    BaseStyle.prototype.constructor.call(this);
}

SizeStyle.prototype = Object.create(BaseStyle.prototype, {});
SizeStyle.prototype.constructor = SizeStyle;

SizeStyle.regexp = /^-?(0|\d+(px|em|vm|vh))$/; 

SizeStyle.prototype.setValue = function(value){
    this._value = value;
    this._$element.find('input').val(value);
}

SizeStyle.prototype.render = function(){
    this._$element = this._jqueryCache.get('#size-style-template').children().clone();
    this._$element.find('label').html(this._title);
    this._$element.find('input').val(this._value);
    this._$element.find('input').attr(this._param);

    return this._$element;
};

SizeStyle.prototype.toStyle = function(){
    return this._param + ': '+ this._value;
};

SizeStyle.prototype.validate = function(){
    if  (!this._value.match(SizeStyle.regexp)) {
        return false;
    }

    return true;
};

SizeStyle.prototype.updateValue = function(){
    this._value = this._$element.find('input').val();
}