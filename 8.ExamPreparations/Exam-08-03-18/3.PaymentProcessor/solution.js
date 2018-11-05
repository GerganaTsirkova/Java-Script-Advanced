class PaymentProcessor {
    constructor(options) {
        this.balance = 0;
        this.payments = 0;
        this.totalPayments = [];
        this.options = {};
        if (options === undefined) {
            this.options = {
                types: ["service", "product", "other"],
                precision: 2
            }
        }
        else {
            if (options.hasOwnProperty('types')) {
                this.options.types = options.types;
            }
            else {
                this.options.types = ["service", "product", "other"]
            }
            if (options.hasOwnProperty('precision')) {
                this.options.precision = options.precision;
            }
            else {
                this.options.precision = 2;
            }
        }
    }

    registerPayment(id, name, type, value) {
        let index = this.getIndex(id);
        if ((id === '') || (name === '') || (typeof value !== 'number')) {
            throw new TypeError();
        }
        if(index > -1){
            throw new Error('A payment with this ID already exists');
        }
        if(!this.options.types.includes(type)) {
            throw new Error()
        }
        else {
            this.payments++;
            this.balance += Number(value.toFixed(this.options.precision));
            this.totalPayments.push({
                ID: id,
                name: name,
                type: type,
                value: value.toFixed(this.options.precision)
            })
        }
    }

    get(id) {
        let index= this.getIndex(id);
        if (index===-1) {
            throw new Error('A payment with this ID does not exist');
        }
        let obj = this.totalPayments[index];
        return `Details about payment ID: ${id}`+
            `- Name: ${obj.name}`+
            `- Type: ${obj.type}`+
            `- Value: ${obj.value}`;
    }


    deletePayment(id) {
        let index = this.getIndex(id);
        if(index===-1){
            throw new Error('Wrong ID');
        }
        this.payments--;
        this.balance -= this.totalPayments[index].value;
        this.totalPayments.splice(index, 1);
    }

    setOptions(optionsRes) {
        if (optionsRes !== undefined) {
            if (optionsRes.hasOwnProperty('types')) {
                this.options.types = optionsRes.types;
            }
            else {
                this.options.types = ["service", "product", "other"]
            }
            if (optionsRes.hasOwnProperty('pecision')) {
                this.options.precision = optionsRes.precision;
            }
            else {
                this.options.precision = 2;
            }
        }
        else {
            this.options = {
                types: ["service", "product", "other"],
                precision: 2
            }
        }
    }

    toString() {
        return 'Summary:\n' +
            `- Payments: ${this.payments}\n` +
            `- Balance: ${this.balance.toFixed(this.options.precision)}\n`;
    }

    getIndex(id){
        let index = -1;
        for (let i = 0; i < this.totalPayments.length; i++) {
            if(this.totalPayments[i].ID === id){
                index = i;
            }
        }
        return index;

    }
}




