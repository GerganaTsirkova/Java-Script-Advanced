function increment(element) {
    let container = $(element);
    let textArea = $('<textarea>')
        .val('0')
        .addClass("counter")
        .attr('disabled',true);
    container.append(textArea);

    let incrementButton = $('<button>Increment</button>')
        .addClass('btn')
        .attr('id','incrementBtn');
    container.append(incrementButton);

    let addButton = $('<button>Add</button>')
        .addClass('btn');
    addButton.attr('id','addBtn');
    container.append(addButton);

    let list = $('<ul>')
        .addClass("results");
    container.append(list);

    incrementButton.on('click',function () {
        let valueOfText = Number(textArea.val())+1;
        textArea.val('');
        textArea.val(`${valueOfText}`);
    });

    addButton.on('click',function () {
        let currenTextValue = textArea.val();
        list.append(`<li>${currenTextValue}</li>`);
    })

}
