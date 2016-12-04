/**
 * Cache for all templates
 * 
 * @constructor
 */
function TemplateCache(){
    this._collection = Object.create(null, {});
    this._queue = [];
}

/**
 * Get instance of TemplateCache 
 *
 * @return {TemplateCache}
 */
TemplateCache.getInstance = function(){
    return TemplateCache._instance ? TemplateCache._instance : TemplateCache._instance = new TemplateCache();
};

/**
 * Get template by url
 *
 * @param {number} id
 * @return {Promise}
 */
TemplateCache.prototype.get = function(url){
    var deferred = $.Deferred();

    this._queue.push({url: url, deferred: deferred});

    if (this._queue.length == 1)  {
        this._processQueue();
    }

    return deferred.promise();
};

/**
 * Process queue of template queries
 */
TemplateCache.prototype._processQueue = function(){
    if (this._queue.length === 0) {
        return;
    }

    var url =  this._queue[0].url,
        deferred = this._queue[0].deferred;

    if (!(url in this._collection)) {
        $.get(url).then(
            (function(html) {
                this._collection[url] = html;

                deferred.resolve(html);

                this._queue.shift();
                this._processQueue();
            }).bind(this),
            function(error) {
                console.error(error);

                this._queue.shift();
                this._processQueue();
            }
        );
    } else {
        deferred.resolve(this._collection[url]);

        this._queue.shift();
        this._processQueue();
    }
};

/**
 * Get template directly by url
 *
 * @param {string} url
 * @return {string}
 */
TemplateCache.prototype.getDirectly = function(url){
    if (!(url in this._collection)) {
        throw new Error('url must be loaded previously to be used');
    }

    return this._collection[url];
};

module.exports = TemplateCache;