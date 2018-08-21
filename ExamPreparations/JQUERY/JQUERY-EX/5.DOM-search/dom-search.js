function domSearch(selector, isCaseSensitive) {
    let mainDiv = $(selector)
        .addClass('items-control');

    let addControlTest = $('<div>')
        .addClass('add-controls');
    let labelAdd = $('<label>')
        .text('Enter text:');
    let inputAdd = $('<input>')
        .attr('type', 'text');
    let a = $('<a>')
        .addClass('button')
        .text('Add');
    labelAdd.append(inputAdd);
    addControlTest.append(labelAdd);
    addControlTest.append(a);
    mainDiv.append(addControlTest);

    let searchDiv = $('<div>')
        .addClass('search-controls');
    let labelSearch = $('<label>')
        .text('Search:');
    let inputSearch = $('<input>')
        .attr('type', 'text')
        .on('input',search);
    labelSearch.append(inputSearch);
    searchDiv.append(labelSearch);
    mainDiv.append(searchDiv);

    let resultDiv = $('<div>')
        .addClass('result-controls ');
    let list = $('<ul>')
        .addClass('items-list');
    resultDiv.append(list);
    mainDiv.append(resultDiv);

    let enteredElement = $('.add-controls label input');
    let addButton = $('.add-controls .button');
    addButton.on('click', function () {
        if (enteredElement.val() !== '') {
            let newLiTextElement = enteredElement.val();
            addNewItem(newLiTextElement);
            enteredElement.val('');
        }
    });

    function addNewItem(item) {
        let li = $('<li>')
            .addClass('list-item')
            .css('display', 'display')
            .append($('<a>')
                .addClass('button')
                .text('x')
                .on('click', function () {
                    $(this).parent().remove();
                }))
            .append($('<strong>')
                .text(`${item}`));
        list.append(li);
    }

    function search(){
        $('li').css('display','');
        let text = $(this).val();
        $('.list-item').each(function () {
            if(isCaseSensitive){
                let str = $(this).find('strong').text();
                if(!str.includes(text)){
                    $(this).css('display','none');
                }
            }
            else {
                let str = $(this).find('strong').text().toLowerCase();
                if(!str.includes(text.toLowerCase())){
                    $(this).css('display','none');
                }
            }
        })
    }

}
