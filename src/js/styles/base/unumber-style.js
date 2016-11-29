/**
 * Style with text input which accepts unsigned number
 *
 * @constuctor
 */
function UnumberStyle(){
    InputStyle.prototype.constructor.call(this);
}

UnumberStyle.prototype = Object.create(InputStyle.prototype, {});
UnumberStyle.prototype.constructor = UnumberStyle;

/**
 * Style value validation
 *
 * @return {boolean}
 */
UnumberStyle.prototype.validate = function(){
    if  (!this._value.match(config.styles.unumberStyle.regexp)) {
        return false;
    }

    return true;
};
