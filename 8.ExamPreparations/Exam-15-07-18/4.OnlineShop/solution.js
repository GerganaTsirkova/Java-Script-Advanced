function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let product = $('.custom-select');
    let price = $('#price');
    let qty = $('#quantity');
    let list = $('.display');
    let button = $('.button');
    let capacity = $('#capacity');
    let itemsTotal = 0;
    let priceTotal = 0;
    product.on('input',function () {
        button.attr('disabled',false);
    });
    button.on('click',function () {
        let li = $('<li>')
            .text(`Product: ${product.val()} Price: ${price.val()} Quantity: ${qty.val()}`);
        li.appendTo(list);
        itemsTotal += Number(qty.val());
        priceTotal += Number(price.val())*Number(qty.val());
        $('#sum').val(priceTotal);
        if(itemsTotal<150){
            capacity.val(itemsTotal);
            product.val('');
            qty.val('1');
            price.val('1');
            button.attr('disabled','disabled');
        }
        else {
            capacity.val('FULL');
            capacity.addClass('fullCapacity');
            product.attr('disabled','disabled');
            qty.attr('disabled','disabled');
            price.attr('disabled','disabled');
            button.attr('disabled','disabled');
        }

    })
}

