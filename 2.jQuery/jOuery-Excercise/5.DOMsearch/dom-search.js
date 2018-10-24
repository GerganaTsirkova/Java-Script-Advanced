function domSearch(selector, booleanValue) {

    $(`${selector}`)
        .addClass('items-control')
        .append($('<div class="add-controls">')
            .append($('<label>Enter text: <input></label>'))
            .append($('<a class="button" style="display: inline-block;">Add</a>').on('click', function () {
                let inputText = $('label input');
                $('.items-list')
                    .append($('<li class="list-item">')
                        .append($('<a class="button">X</a>').on('click', function () {
                            $(this).parent().remove();
                        }))
                        .append($(`<strong>${inputText.val().trim()}</strong>`)));
                inputText.val('')
            })))
        .append($('<div class="search-controls">')
            .append($('<label>Search: <input></label>')))
        .append($('<div class="result-controls">')
            .append($('<ul class="items-list">')));
    //$('li').remove();

    $('.search-controls :input').on('input propertychange', function () {
        let searchText = $(".search-controls input");
        $('li strong').each(function () {
            if(booleanValue===true){
                if($(this).text().indexOf(searchText.val().trim())<0){
                    $(this).parent().css('display','none');
                }
            }
            else {
                if($(this).text().toLowerCase().indexOf(searchText.val().toLowerCase())<0){
                    $(this).parent().css('display','none');
                }
            }
        });

    })
}