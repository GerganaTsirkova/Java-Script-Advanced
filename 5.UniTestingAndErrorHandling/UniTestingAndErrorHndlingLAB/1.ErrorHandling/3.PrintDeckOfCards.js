function printDeckOfCards(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let suit = str.substring(str.length-1);
        let card = str.substring(0,str.length-1);
        try{
            result += makeCard(card,suit) + ' ';
        } catch (e) {
            console.log(`Invalid card: ${str}`);
            return;
        }
    }
    function makeCard(card,suit) {
        const VALID_CARD = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const VALID_SUITS = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        if((VALID_CARD.indexOf(card)<0)||(!VALID_SUITS.hasOwnProperty(suit))){
            throw  new Error('Error')
        }
        return {
            toString: function () {
                return card+VALID_SUITS[suit];
            }
        }
    }

    console.log(result);
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);