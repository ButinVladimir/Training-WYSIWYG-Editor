function BaseStyle(){
    this._jqueryCache = JQueryCache.getInstance();

    this._param = '';
    this._title = '';
    this._value = '';
    this._$element = null;
}

BaseStyle.prototype.setValue = function(value){
    throw new Error('Set style value is not implemented');
}

BaseStyle.prototype.render = function(){
    throw new Error('Rendering is not implemented');
};

BaseStyle.prototype.toStyle = function(){
    throw new Error('Convertation to style is not implemented');
};

BaseStyle.prototype.submit = function(){
    throw new Error('submit is not implemented');
};

BaseStyle.prototype.toggle = function(value){
    this._$element.toggleClass('hidden', !value);

    return this;
};

BaseStyle.prototype.updateValue = function(){
    throw new Error('Update style value is not implemented');
};

BaseStyle.prototype.getValue = function(){
    return this._value;
};

BaseStyle.prototype.getError = function(){
    return "Invalid " + this._param + " value";
};