class PublicTransportTable {
    constructor(town) {
        this.town = town;
        this.captionName = $('table caption').text(`${this.town}'s Public Transport`);
        this.addEventListeners();
    }

    addVehicle(vehicleObj) {
        let mainInfoRow = $('.vehicles-info');
        let tr = $(`<tr><td>${vehicleObj.type}</td><td>${vehicleObj.name}</td></tr>`);
        mainInfoRow.append(tr);
        let btn = $('<button>More Info</button>');
        let td = $('<td>');
        td.append(btn);
        tr.append(td);
        let trExtra = $(`<tr class="more-info"><td colspan="3"><table><tr><td>Route: ${vehicleObj.route}` +
            `</td></tr><tr><td>Price: ${vehicleObj.price}</td></tr>` +
            `<tr><td>Driver: ${vehicleObj.driver}</td></tr></table></td></tr>`);

        btn.on('click', function () {
            if ($(this).text() === 'More Info') {
                $(this).text('Less Info');
                trExtra.insertAfter(tr);
            } else {
                $(this).text('More Info');
                trExtra.remove();
            }
        });
    }

    addEventListeners() {
        $('.search-btn').on('click', function () {
            let typeForm = $('input[name="type"]');
            let type = typeForm.val();
            let nameForm = $('input[name="name"]');
            let name = nameForm.val();
            let arr = $('.vehicles-info tr');
            if (type) {
                for (let i = 0; i < arr.length; i++) {
                    let row = $(arr[i]);
                    if (row.find('td').first().text().includes(type)) {
                        row.css('display', '');
                    }
                    else {
                        row.css('display', 'none');
                    }
                }
            }
            if (name) {
                for (let i = 0; i < arr.length; i++) {
                    let row = $(arr[i]);
                    if (row.find('td').eq(1).text().includes(name)) {
                        row.css('display', '');
                    }
                    else {
                        row.css('display', 'none');
                    }
                }
            }
        });

        $('.clear-btn').on('click', function () {
            let typeForm = $('input[name="type"]');
            let type = typeForm.val();
            let nameForm = $('input[name="name"]');
            let name = nameForm.val();
            $('.vehicles-info tr').css('display', '');
            typeForm.val('');
            nameForm.val('');
        });
    }
}