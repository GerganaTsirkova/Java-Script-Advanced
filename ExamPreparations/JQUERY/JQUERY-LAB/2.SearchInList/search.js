function search() {
    let textInput = $('#searchText').val();
    let arr = $(`#towns li:contains(${textInput})`).css('font-weight','bold');
    $('#result').text(arr.length + ' matches found.')
}