function createBook(selector,title,author, isbn) {

    let bookGenerator = (function () {
        let id = 1;
        return function (selector, title, author, isbn) {
            let container = $(`${selector}`);
            let bookContainer = $('<div>');
            bookContainer
                .attr('id',`book${id}`)
                .css('border','none');
            $(`<p class='title'>${title}</p>`).appendTo(bookContainer);
            $(`<p class='author'>${author}</p>`).appendTo(bookContainer);
            $(`<p class='isbn'>${isbn}</p>`).appendTo(bookContainer);
            let selectBtn = $('<button>Select</button>');
            selectBtn.appendTo(bookContainer);
            let deSelectBtn = $('<button>Deselect</button>');
            deSelectBtn.appendTo(bookContainer);
            bookContainer.appendTo(container);
            selectBtn.on('click',function () {
                bookContainer.css('border','2px solid blue')
            });
            deSelectBtn.on('click',function () {
                bookContainer.css('border','none')
            });
            id++;
        }
    }());
    bookGenerator(selector,title,author, isbn);
}
