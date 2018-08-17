function attachEvents() {
    $('a').on('click', function () {
        $('.button').removeClass('selected');
        $(this).addClass('selected');
    });
}