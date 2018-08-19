function extractText() {
    let lis = $('#items li').toArray().map(li=>$(li).text()).join(', ');
    $('#result').text(lis);
}