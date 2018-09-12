function addDestination() {
    let city = $('.inputData:first');
    let country = $('.inputData:last');
    let season = $('#seasons option:selected');

    if ((city.val() !== '') && (country.val() !== '')) {
        let tableBody = $('#destinationsList');
        let row = $('<tr>');
        let td1 = $('<td>').text(`${city.val()}, ${country.val()}`);
        let td2 = $('<td>').text(`${season.text()}`);
        row.append(td1);
        row.append(td2);
        tableBody.append(row);
        if (season.text() === 'Spring') {
            let springSummary = $('#spring');
            let num = Number(springSummary.val())+1;
            springSummary.val(`${num}`);
        }
        else if (season.text() === 'Summer') {
            let summerSummary = $('#summer');
            let num = Number(summerSummary.val())+1;
            summerSummary.val(`${num}`);
        }
        else if (season.text() === 'Autumn') {
            let autumnSummary = $('#autumn');
            let num = Number(autumnSummary.val())+1;
            autumnSummary.val(`${num}`);
        }
        else if (season.text() === 'Winter') {
            let winterSummary = $('#winter');
            let num = Number(winterSummary.val())+1;
            winterSummary.val(`${num}`);
        }
    }
    city.val('');
    country.val('');
}