class PaymentManager {

    constructor(title) {
        this.title = title;
    }

    render(id) {
        let target = $(`#${id}`);
        let table = $('<table>')
            .append($(`<caption>${this.title} Payment Manager</caption>`))
            .append($(`<thead>`)
                .append($(`<tr>`)
                    .append($(`<th class="name">Name</th>`))
                    .append($(`<th class="category">Category</th>`))
                    .append($(`<th class="price">Price</th>`))
                    .append($(`<th>Actions</th>`))))
            .append($(`<tbody class="payments">`))
            .append($(`<tfoot class="input-data">`)
                .append($('<tr>')
                    .append($(`<td><input name="name" type="text"></td>`))
                    .append($(`<td><input name="category" type="text"></td>`))
                    .append($(`<td><input name="price" type="number"></td>`))
                    .append($('<td>')
                        .append($('<button>Add</button>').on('click', function () {
                            let paymentName = $(`#${id} input[name="name"]`);
                            let paymentCategory = $(`#${id} input[name="category"]`);
                            let paymentPrice = $(`#${id} input[name="price"]`);
                            let price =paymentPrice.val();
                            if(price.includes('.')){
                                let num = Number(paymentPrice.val());
                                price = num.toString();
                            }
                            if ((paymentPrice.val() !== '') && (paymentCategory.val() !== "") && (paymentName.val() !== '')) {
                                $(`#${id} .payments`)
                                    .append($('<tr>')
                                        .append($(`<td>${paymentName.val()}</td>`))
                                        .append($(`<td>${paymentCategory.val()}</td>`))
                                        .append($(`<td>${price}</td>`))
                                        .append($(`<button>Delete</button>`).on('click', function () {
                                            $(this).parent().remove();
                                        })));
                                paymentName.val('');
                                paymentCategory.val('');
                                paymentPrice.val('');
                            }
                        })))));


        let payments = $(`.payments`);
        target.append(table);
    }
}