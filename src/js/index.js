require('./assign');

var elementConsts = require('./consts/elements'),
    config = require('./config'),
    objectRegistry = require('./registries/object-registry').getInstance(),
    styleRegistry = require('./registries/style-registry').getInstance(),
    jqueryCache = require('./registries/jquery-cache').getInstance(),
    templateCache = require('./registries/template-cache').getInstance(),
    objectFactoryRegistry = require('./registries/object-factory-registry').getInstance(),
    htmlBuilder = require('./build/html-builder').getInstance(),
    $contentContainer = jqueryCache.get('#content-container'),
    $content = jqueryCache.get('#content'),
    $styleForm = jqueryCache.get('#style-form'),
    $addBtnList = jqueryCache.get('#add-btn-list'),
    $modalWindow = jqueryCache.get('#modal-window'),
    $modalSave = jqueryCache.get('#modal-save'),
    $previewContainer = jqueryCache.get('#preview-container'),
    $mainContainer = jqueryCache.get('#main-container'),
    $previewBtn = jqueryCache.get('#preview-btn'),
    $saveBtn = jqueryCache.get('#save-btn'),
    isPreview = false,
    rootContainer = null;
    copiedElement = null;
    selected = null;
   
require('./init')(objectRegistry, styleRegistry, objectFactoryRegistry, jqueryCache, templateCache, config);

// Add init container
objectFactoryRegistry.get(elementConsts.ELEMENT_CONTAINER).create().then(function(container) {
    rootContainer = container;
    $content.append(container.getElement());
});

function resetSelection() {
    selected = null;
    $content.find('.selected').removeClass('selected');

    $styleForm.addClass('hidden');
    styleRegistry.hide();

    $addBtnList.empty();
}

// Selection event handlers
$contentContainer.on('click', resetSelection);

$contentContainer.on('click', '.block-container', function(e) {
    e.stopPropagation();
    resetSelection();
    var $this = $(this);

    selected = objectRegistry.get($this.attr('id'));
    $this.addClass('selected');

    $styleForm.removeClass('hidden');
    selected.toggleStyleInputs(true);

    selected.iterateSupportedSubelements(function(subelementValue) {
        var li = $('<li>'),
            a = $('<a>', {
                href: '#',
                'data-value': subelementValue, 
                text: objectFactoryRegistry.get(subelementValue).getTitle()
            });

        a.appendTo(li);
        li.appendTo($addBtnList);
    });

    selected.getElement().children('.block-buttons').children('.btn-paste').toggle(!!(copiedElement && selected.isSupportingSubelement(copiedElement.getType())));
});

// Deletion event handler
$contentContainer.on('click', '.block-container.selected > .block-buttons > .btn-delete', function(e) {
    e.stopPropagation();
    objectRegistry.deleteStart(selected.getId());
    resetSelection();
});

// Move element handler
$contentContainer.on('click', '.block-container.selected > .block-buttons > .btn-move-prev', function() {
    var $element = selected.getElement(),
        $prev = $element.prev();

    if ($prev.length > 0) {
        $prev.detach();
        $element.after($prev);
    }
});

$contentContainer.on('click', '.block-container.selected > .block-buttons > .btn-move-next', function() {
    var $element = selected.getElement(),
        $next = $element.next();

    if ($next.length > 0) {
        $next.detach();
        $element.before($next);
    }
});

// Copy event handler
$contentContainer.on('click', '.block-container.selected > .block-buttons > .btn-copy', function() {
    copiedElement = selected;
});

// Copy event handler
$contentContainer.on('click', '.block-container.selected > .block-buttons > .btn-paste', function() {
    if (copiedElement && selected.isSupportingSubelement(copiedElement.getType())) {
        selected.appendSubelement(copiedElement.deepCopyStart(), true);
    }
});

// Style input update handler
$styleForm.on('submit', function(e) {
    e.preventDefault();

    selected.updateStyles(true);
    return false;
});

// Add element handler
$addBtnList.on('click', 'a', function() {
    objectFactoryRegistry.get(+$(this).data('value')).create().then(function(subelement) {
        selected.appendSubelement(subelement, true);
    });
});

// Update element handlers
$contentContainer.on('click', '.block-container.selected > .block-buttons > .btn-update', function() {
    $modalWindow.find('.modal-body').empty();
    selected.loadModalWindow($modalWindow).then(function() {
        $modalWindow.modal('show');
    });
});

$modalSave.on('click', function() {
    selected.update($modalWindow);

    $modalWindow.modal('hide');
});

// Preview handler
$previewBtn.click(function() {
    $previewContainer.empty();
    isPreview = !isPreview;

    if (isPreview) {
        htmlBuilder.build(rootContainer).appendTo($previewContainer);
    }

    $mainContainer.toggle(!isPreview);
    $previewContainer.toggle(isPreview);
});

// Save handler
$saveBtn.click(function() {
    var $container = $('<div>');
    htmlBuilder.build(rootContainer).appendTo($container);

    templateCache.get('templates/base/result.html').then(function(html) {
        var result = html.replace('<!-- CONTENT -->', $container.html());

        var zip = new JSZip();
        zip.file("page.html", result);

        return zip.generateAsync({type:"blob"});
    }).then(function(content) {
        saveAs(content, "page.zip");
    });
});