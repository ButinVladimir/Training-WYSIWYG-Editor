/**
 * Flex grow style
 *
 * @constuctor
 */
function FlexGrow(){
    UnumberStyle.prototype.constructor.call(this);

    this._title = 'Flex Grow';
    this._param = 'flex-grow';
}

FlexGrow.prototype = Object.create(UnumberStyle.prototype, {});
FlexGrow.prototype.constructor = FlexGrow;
