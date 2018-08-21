function addSticker() {
    let title = $('.title-input input');
    console.log(title.val());
    let text = $('.text-input input');
    console.log(text.val());
    if ((title.val() !== '') && (text.val() !== '')) {
        $('.stickerBoard #sticker-list')
            .append($('<li>')
                .addClass('note-content')
                .append($('<a>')
                    .addClass('button')
                    .text('x')
                    .on('click',removeFunc))
                .append(`<h2>${title.val()}</h2>`)
                .append('<hr>')
                .append(`<p>${text.val()}</p>`));

        title.val('');
        text.val('');
    }

    function removeFunc() {
        $(this).parent().remove();
    }
}