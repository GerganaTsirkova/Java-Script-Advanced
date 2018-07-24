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
console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));