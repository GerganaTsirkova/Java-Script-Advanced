function initializeTable() {
    createCountry('Bulgaria','Sofia');
    createCountry('Germany','Berlin');
    createCountry('Russia','Moscow');
    hideButtons();
    
    $('#createLink').on('click',function () {
        let country = $('#newCountryText').val();
        let city = $('#newCapitalText').val();
        createCountry(country,city);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
    });

    function createCountry(countryName,townName) {
        let row = $('<tr>')
            .append($(`<td>${countryName}</td>`))
            .append($(`<td>${townName}</td>`))
            .append($('<td>')
                .append($('<a href="#" id="up">[Up]</a>)').on('click',moveUp))
                .append($('<a href="#" id="down">[Down]</a>)').on('click',moveDown))
                .append($('<a href="#" id="delete">[Delete]</a>)').on('click',deleteBtn))
            );
        $('#countriesTable').append(row);
        hideButtons();
    }

    function deleteBtn() {
        $(this).parent().parent().remove();
        hideButtons();
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.insertBefore(row.prev());
        hideButtons();
    }
    
    function moveDown() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next());
        hideButtons();
    }
    
    function hideButtons() {
        $('#countriesTable a').css('display','');
        $('#countriesTable tr:eq(2) #up').css('display','none');
        $('#countriesTable tr:last #down').css('display','none');
    }
}
