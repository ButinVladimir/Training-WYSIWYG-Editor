/**
 * Cache for all jQuery objects
 * @constructor
 */
function JQueryCache(){
    this._collection = Object.create(null, {});
}

/**
 * Get instance of JQueryCache 
 *
 * @return {JQueryCache}
 */
JQueryCache.getInstance = function(){
    return JQueryCache._instance ? JQueryCache._instance : JQueryCache._instance = new JQueryCache();
};

/**
 * Get jquery element by query
 *
 * @param {string} query
 * @return {jQuery}
 */
JQueryCache.prototype.get = function(query){
    if (!(query in this._collection)) {
        this._collection[query] = $(query);
    }

    return this._collection[query];
};
