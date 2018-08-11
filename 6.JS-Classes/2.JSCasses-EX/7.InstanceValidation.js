class CheckingAccount {
    constructor(clientId, email, firstName, lastName ){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId(){
        return this._clientId;
    }
    set clientId(value){
        this._clientId = value;
        let patternClientId = /^[0-9]{6}$/;
        let regex = new RegExp(patternClientId);
        let match = regex.exec(this._clientId);
        if(!match){
            throw new TypeError('Client ID must be a 6-digit number')
        }
    }
    get email(){
        return this._email;
    }
    set email(str){
        this._email = str;
        let patternEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9.]+$/;
        let regex = new RegExp(patternEmail);
        let match = regex.exec(this._email);
        if(!match){
            throw new TypeError('Invalid e-mail');
        }
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(str){
        this._firstName = str;
        let patternLen = /^(.){3,20}$/;
        let regexLen = new RegExp(patternLen);
        let matchLen = regexLen.exec(this._firstName);
        if(!matchLen){
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        let patternLetters = /^[A-Za-z]{3,20}$/;
        let regexLetters = new RegExp(patternLetters);
        let matchLetters = regexLetters.exec(this._firstName);
        if(!matchLetters){
            throw new TypeError('First name must contain only Latin characters');
        }
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(str){
        this._lastName = str;
        let patternLen = /^(.){3,20}$/;
        let regexLen = new RegExp(patternLen);
        let matchLen = regexLen.exec(this._lastName);
        if(!matchLen){
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        let patternLetters = /^[A-Za-z]{3,20}$/;
        let regexLetters = new RegExp(patternLetters);
        let matchLetters = regexLetters.exec(this._lastName);
        if(!matchLetters){
            throw new TypeError('Last name must contain only Latin characters');
        }
    }
}
let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov');

