function increment(selector) {
    let textArea = $('<textarea>')
        .addClass('counter')
        .attr('disabled','disabled');
    textArea.val(0);
    let btnIncrement = $('<button>')
        .addClass('button')
        .attr('id','incrementBtn')
        .text('Increment')
        .on('click',function () {
            textArea.val(`${Number(textArea.val())+1}`);
        });
    let btnAdd = $('<button>')
        .addClass('button')
        .attr('id','addBtn')
        .text('Add')
        .on('click',function () {
            let li = $(`<li>${textArea.val()}</li>`);
            li.appendTo(list);
        });
    let list = $('<ul>')
        .addClass('result');

    textArea.appendTo(selector);
    btnAdd.appendTo(selector);
    btnIncrement.appendTo(selector);
    list.appendTo(selector);
}
