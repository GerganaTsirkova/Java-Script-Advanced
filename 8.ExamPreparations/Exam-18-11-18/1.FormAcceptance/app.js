function acceptance() {
    let company = $('#fields td input[name="shippingCompany"]');
    let product = $('#fields td input[name="productName"]');
    let quantity = $('#fields td input[name="productQuantity"]');
    let scrape = $('#fields td input[name="productScrape"]');
    if ((company.val() !== "") && (quantity.val() !== "") && (scrape.val() !== "") && (product.val() !== "") &&
        (Number(quantity.val()) - Number(scrape.val()) > 0) && (typeof Number(quantity.val()) === 'number') && (typeof Number(scrape.val()) === 'number')) {
        let str = `[${company.val()}] ${product.val()} - ${Number(quantity.val()) - Number(scrape.val())} pieces`;
        let div = $('<div>')
            .append($(`<p>${str}</p>`))
            .append($('<button type="button">Out of stock</button>').on('click',function () {
                $(this).parent().remove();
            }));
        $('#warehouse').append(div);
        company.val('');
        product.val('');
        quantity.val('');
        scrape.val('');
    }
}