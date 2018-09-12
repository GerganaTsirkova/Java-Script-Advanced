function makeReservation(selector) {
    let name = $('#fullName');
    let email = $('#email');
    let phone = $('#phoneNumber');
    let address = $('#address');
    let postalCode = $('#postalCode');
    let previewSection = $('#infoPreview');
    let editBtn = $('#edit');
    let continueBtn = $('#continue');
    let submitBtn = $('#submit').on('click', function () {
        if ((name.val().trim() !== '') && (email.val().trim() !== '')) {
            let nameLi = $('<li>').text(`Name: ${name.val().trim()}`);
            let emailLi = $('<li>').text(`E-mail: ${email.val().trim()}`);
            previewSection.append(nameLi);
            previewSection.append(emailLi);
            if (phone.val().trim() !== '') {
                let phoneLi = $('<li>').text(`Phone: ${phone.val()}`);
                previewSection.append(phoneLi);
            }
            else {
                let phoneLi = $('<li>').text(`Phone:`);
                previewSection.append(phoneLi);
            }

            if (address.val().trim() !== '') {
                let addressLi = $('<li>').text(`Address: ${address.val()}`);
                previewSection.append(addressLi);
            }
            else {
                let addressLi = $('<li>').text(`Address:`);
                previewSection.append(addressLi);
            }

            if (postalCode.val().trim() !== '') {
                let postalCodeLi = $('<li>').text(`Postal Code: ${postalCode.val()}`);
                previewSection.append(postalCodeLi);
            }
            else {
                let postalCodeLi = $('<li>').text(`Postal Code:`);
                previewSection.append(postalCodeLi);
            }
            name.val('');
            email.val('');
            address.val('');
            postalCode.val('');
            phone.val('');
            $(this).attr('disabled', 'disabled');
            editBtn.attr('disabled', false);
            continueBtn.attr('disabled', false)
        }
    });

    editBtn.on('click', function () {
        name.val($(previewSection.children()[0]).text().substring(6));
        email.val($(previewSection.children()[1]).text().substring(8));
        phone.val($(previewSection.children()[2]).text().substring(7));
        address.val($(previewSection.children()[3]).text().substring(9));
        postalCode.val($(previewSection.children()[4]).text().substring(13));

        $('#infoPreview > li').remove();
        submitBtn.attr("disabled", false);
        continueBtn.attr("disabled", true);
        $(this).attr("disabled", true);

    });

    continueBtn.on('click', function () {
        submitBtn.attr("disabled", true);
        editBtn.attr("disabled", true);
        $(this).attr("disabled", true);

        $('#container')
            .append("<h2>Payment details</h2>" +
                "<select id='paymentOptions' class='custom-select'>" +
                "<option selected disabled hidden>Choose</option>" +
                "<option value='creditCard'>Credit Card</option>" +
                "<option value='bankTransfer'>Bank Transfer</option>" +
                "</select>" +
                "<div id='extraDetails'></div>" +
                "</div>");


        $('#paymentOptions').change('click', function () {
            let extra = $('#extraDetails');
            let choice = $('#paymentOptions option:selected');
            if (choice.text() === 'Credit Card') {
                extra.append('<div class="inputLabel">Card Number<input></div><br>');
                extra.append('<div class="inputLabel">Expiration Date<input></div><br>');
                extra.append('<div class="inputLabel">Security Numbers<input></div><br>');
                extra.append('<button id="checkOut">Check Out</button>');
            }
            else if (choice.text() === 'Bank Transfer') {
                extra.append('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>');
                extra.append('<button id="checkOut">Check Out</button>');
            }
            let checkout = $('#checkOut');
            checkout.on('click', function () {
                let cardDetails = $('.inputLabel');
                let wrapper = $('#wrapper');
                wrapper.empty();
                wrapper.append('<h4>Thank you for your reservation!</h4>')
            })
        });
    });

}
