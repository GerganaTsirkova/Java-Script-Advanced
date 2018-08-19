function attachEvents() {
    $('li').on('click',function () {
        if($(this).attr('data-selected')){
            $(this).removeAttr('data-selected');
            $(this).css('background','');
        }
        else {
            $(this).attr('data-selected',true);
            $(this).css('background','#DDD');
        }
    });
    $('#showTownsButton').on('click',function () {
        let lis = $('#items li[data-selected=true]').toArray().map(e=>$(e).text()).join(', ');
        $('#selectedTowns').text('Selected towns: '+lis);
    })
}
