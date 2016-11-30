module.exports = function(objectRegistry, styleRegistry, objectFactoryRegistry, jqueryCache, config) {
    config.styles.forEach(function(style) {
        styleRegistry.add(style.type, new style.class(jqueryCache, style));
    });

    styleRegistry.render(jqueryCache.get('#style-inputs'));

    config.elements.forEach(function(element) {
        objectFactoryRegistry.add(element.type, new element.factoryClass(objectRegistry, styleRegistry, jqueryCache, element));
    });
};