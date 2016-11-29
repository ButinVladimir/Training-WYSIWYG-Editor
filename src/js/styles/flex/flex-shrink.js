/**
 * Flex shrink style
 *
 * @constuctor
 */
function FlexShrink(){
    UnumberStyle.prototype.constructor.call(this);

    this._title = 'Flex Shrink';
    this._param = 'flex-shrink';
}

FlexShrink.prototype = Object.create(UnumberStyle.prototype, {});
FlexShrink.prototype.constructor = FlexShrink;
