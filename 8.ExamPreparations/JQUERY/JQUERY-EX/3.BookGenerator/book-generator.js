let result = (function () {
    let id = 1;
    return function (selector,tittle,author,isbn) {
        let div = $('<div>')
            .attr('id',`book${id++}`)
            .css('border','2px solid blue');
        let parTittle = $('<p>')
            .addClass('title')
            .text(`${tittle}`);
        let parAuthor = $('<p>')
            .addClass('author')
            .text(`${author}`);
        let parIsbn = $('<p>')
            .addClass('isbn')
            .text(`${isbn}`);
        let btnSelect = $('<button>')
            .text('Select');
        let btnDeselect = $('<button>')
            .text('Deselect');
        parTittle.appendTo(div);
        parAuthor.appendTo(div);
        parIsbn.appendTo(div);
        btnSelect.appendTo(div);
        btnDeselect.appendTo(div);
        div.appendTo($(selector));

        btnSelect.on('click',function () {
            div.css('border','2px solid blue');
        });

        btnDeselect.on('click',function () {
            div.css('border','none');
        });
    }
})();

result("#wrapper","Alice in Wonderland","Lewis Carroll",1111);