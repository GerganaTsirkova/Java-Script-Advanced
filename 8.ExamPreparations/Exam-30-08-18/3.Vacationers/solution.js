class Vacationer {
    constructor(fullName, objParameter) {
        this.fullName = fullName;
        this.creditCard = objParameter;
        this.wishList = [];
        this.idNumber = this.generateIDNumber();
    }

    get fullName() {
        return this._fullName
    }

    set fullName(input) {
        if (((input.length < 3) || (input.length > 3)) || (!Array.isArray(input))) {
            throw new Error('Invalid full name');
        }
        let pattern = /^[A-Z][a-z]+$/;
        for (let i = 0; i < input.length; i++) {
            let regex = new RegExp(pattern);
            let match = regex.exec(input[i]);
            if (!match) {
                throw new Error('Invalid full name');
            }
        }
        this._fullName = {
            firstName: input[0],
            middleName: input[1],
            lastName: input[2]
        };

    }

    get creditCard(){
        return this._creditCard;
    }

    set creditCard(objParameter){
        if (objParameter === undefined) {
            this._creditCard = {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111
            }
        }
        else {
            if ((objParameter.length !== 3)||(!Array.isArray(objParameter))){
                throw new Error('Missing credit card information')
            }
            if ((typeof objParameter[0] === 'string' || typeof objParameter[2]=== 'string')) {
                throw new Error('Invalid credit card details')
            }
            this._creditCard = {
                cardNumber: objParameter[0],
                expirationDate: objParameter[1],
                securityNumber: objParameter[2]
            }
        }
    }


    generateIDNumber() {
        let number = 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length;
        let str = '';
        let lastName = this.fullName.lastName;
        if ((lastName[lastName.length - 1] === 'a') || (lastName[lastName.length - 1] === 'e') ||
            (lastName[lastName.length - 1] === 'o') || (lastName[lastName.length - 1] === 'i') ||
            (lastName[lastName.length - 1] === 'u')) {
            str = number.toString() + 8;
        }
        else {
            str = number.toString() + 7;
        }
        return str;
    }

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error('Missing credit card information')
        }
        if (typeof input[0] === 'string' || typeof input[2]=== 'string') {
            throw new Error('Invalid credit card details')
        }
        this.creditCard = {
            cardNumber: input[0],
            expirationDate: input[1],
            securityNumber: input[2]
        }
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist')
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length)
    }

    getVacationerInfo() {
        if (this.wishList.length === 0) {
            this.wishList.push('empty');
        }

        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n` +
            `ID Number: ${this.idNumber}\n` +
            `Wishlist:\n` +
            `${this.wishList.join(', ')}\n` +
            `Credit Card:\n` +
            `Card Number: ${this.creditCard.cardNumber}\n` +
            `Expiration Date: ${this.creditCard.expirationDate}\n` +
            `Security Number: ${this.creditCard.securityNumber}`
    }
}
classInstance1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"])
new Vacationer(["Tania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777])




