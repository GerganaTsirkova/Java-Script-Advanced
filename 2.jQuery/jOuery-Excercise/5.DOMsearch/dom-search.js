function domSearch(selectElement, booleanValue) {
    let selector = $(selectElement);

    let addDiv = $('<div>').addClass('add-controls');
    let labelAdd = $('<label text="input">Enter text: </label>');
    let inputAdd = $('<input type="text">');
    labelAdd.append(inputAdd);
    let anchorAdd =$('<a class="button" style="display:inline-block">Add</a>');
    anchorAdd.click(function () {
        let elementText = $('label input');
        let newElement = $('<li>')
            .addClass('list-item')
            .append($('<a>').addClass('button').text('X').click(function () {
                $(this).parent().remove();
            }))
            .append($('<strong>').text(elementText.val().trim()));

        $('ul.items-list').append(newElement);
        elementText.val('');
    });
    addDiv
        .append(labelAdd)
        .append(anchorAdd);


    let searchDiv = $('<div>').addClass('search-controls');
    let labelSearch = $('<label text="input">Search: </label>');
    let inputSearch = $('<input type="text">');
    searchDiv
        .append(labelSearch)
        .append(inputSearch);


    let resultDiv = $('<div>').addClass('result-controls');
    let ul = $('<ul>').addClass('items-list');
    resultDiv.append(ul);


    selector
        .append(addDiv)
        .append(searchDiv)
        .append(resultDiv);

}
