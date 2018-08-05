let result = (function () {
    const Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        SPADES: "\u2660",
        HEARTS: "\u2665"
    };

    const Faces = ['2', '3','4','5','6','7','8','9','10','J','Q','K','A'];

    class Card{
        constructor(face,suit){
            this.face = face;
            this.suit = suit;
        }
        set face(f){
            //f is the result from the constructor this.face
            if(!Faces.includes(f)){
                throw new TypeError('Invalid card face'+ f)
            }
            this._face = f;
        }
        get face(){
            return this._face;
        }
        
        set suit(s){
            if (!Object.values(Suits).includes(s)) {
                throw new TypeError('Invalid card suit'+ s)
            }
            this._suit = s;
        }

        get suit(){
            return this._suit;
        }

    }

    return {Suits,Card}
})();
let Card = result.Card;
let Suit = result.Suit;
