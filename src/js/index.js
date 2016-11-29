$(function(){
    var objectRegistry = ObjectRegistry.getInstance(),
        styleRegistry = StyleRegistry.getInstance(),
        jqueryCache = JQueryCache.getInstance(),
        containerFactory = ContainerFactory.getInstance(),
        $contentContainer = jqueryCache.get("#content-container"),
        $content = jqueryCache.get("#content"),
        $styleForm = jqueryCache.get("#style-form"),
        $styleInputs = jqueryCache.get("#style-inputs"),
        selected = null;

    styleRegistry.add(STYLE_PADDING, new Padding())
        .render();



    // Add init container
    $content.append(containerFactory.create());

    // Selection events
    $contentContainer.on('click', function(e) {
        selected = null;
        $content.find('.selected').removeClass('selected');
        $styleForm.addClass('hidden');
        styleRegistry.hide();
    });

    $contentContainer.on('click', '.block-container', function(e) {
        e.stopPropagation();
        var $this = $(this);

        selected = objectRegistry.get($this.attr('id'));
        $this.addClass('selected');
        $styleForm.removeClass('hidden');
        selected.displayInputs();
    });


    // Style input update

    $styleForm.on('submit', function(e) {
        e.preventDefault();

        selected.updateStyles();
        return false;
    });  
});