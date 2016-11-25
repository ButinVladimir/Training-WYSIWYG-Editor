$(function() {
    var $editField = $('#edit-field');
    var $boldButton = $('#bold-btn')
    var selection = null;

    function getSelectionRange() {
        return window.getSelection().getRangeAt(0);
    }

    function addBold(selection) {
        console.dir(selection);
        if (selection.startContainer.nodeType == Node.TEXT_NODE && selection.endContainer.nodeType == Node.TEXT_NODE) {
            if (selection.commonAncestorContainer.nodeType == Node.TEXT_NODE) {
                var start = selection.startOffset;
                var finish = selection.endOffset;

                if (finish > start) {
                    var $node = $(selection.startContainer);
                    var html = '';
                    var nodeText = $node.text();

                    if (selection.startOffset > 0) {
                        html += nodeText.substring(0, selection.startOffset);
                    }

                    html += nodeText.substring(start, finish);

                    if (selection.endOffset > 0) {
                        html += nodeText.substring(finish, nodeText.length);
                    }

                    $node.replaceWith(html);
                }
            } else {
                traverse(selection);
            }
        }
    }

    function traverse(selection) {
        var startNode = selection.startContainer,
            endNode = selection.endContainer,
            commonAncestor = selection.commonAncestorContainer;
    }

    $editField.on('click keydown keyup', function(event) {
        selection = getSelectionRange();
    });

    $boldButton.on('click', function(event) {
        if (selection) {
            addBold(selection);
        }
    });
})