/**
 * Style with text input which accepts size
 *
 * @constuctor
 */
function SizeStyle(){
    InputStyle.prototype.constructor.call(this);
}

SizeStyle.prototype = Object.create(InputStyle.prototype, {});
SizeStyle.prototype.constructor = SizeStyle;

/**
 * Style value validation
 *
 * @return {boolean}
 */
SizeStyle.prototype.validate = function(){
    if  (!this._value.match(config.styles.sizeStyle.regexp)) {
        return false;
    }

    return true;
};
