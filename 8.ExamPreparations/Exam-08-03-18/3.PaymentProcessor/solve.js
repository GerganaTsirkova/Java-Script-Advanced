class PaymentProcessor {
    constructor(option) {
        if (option !== undefined) {
            if (option.hasOwnProperty('types')) {
                this.types = option.types;
            }
            else {
                this.types = ["service", "product", "other"];
            }
            if (option.hasOwnProperty('precision')) {
                this.precision = option.precision;
            }
            else {
                this.precision = 2;
            }
            this.id = '';
            this.name = '';
            this.type = '';
            this.valuePayed = '';
            this.payments = [];
            this.paymentsCounter = 0;
            this.balance = 0;
        }
        else {
            this.types = ["service", "product", "other"];
            this.precision = 2;
            this.id = '';
            this.name = '';
            this.type = '';
            this.valuePayed = '';
            this.payments = [];
            this.paymentsCounter = 0;
            this.balance = 0;
        }
    }

    setOptions(options) {
        if (typeof options === 'object') {
            if (options.hasOwnProperty('types')) {
                this.types = options.types;
            }
            if (options.hasOwnProperty('precision')) {
                this.precision = options.precision;
            }
        }
    }

    registerPayment(id, name, type, valuePayed) {
        if (id === undefined || name === undefined || type === undefined || valuePayed === undefined || id === '' || name === "" || type === "" || typeof valuePayed !== 'number' || this.types.indexOf(type) === -1) {
            throw new Error('Invalid type!')
        }
        if (this.payments.length > 0) {
            let exists = false;
            for (let pay of this.payments) {
                if (pay.id === id) {
                    exists = true;
                }
            }
            if (exists) {
                throw new Error('ID already exists!')
            }
            else {
                let obj = {
                    id: id,
                    name: name,
                    type: type,
                    valuePayed: valuePayed
                };
                this.payments.push(obj);

                this.id = id;
                this.name = name;
                this.type = type;
                this.valuePayed = valuePayed;
                this.paymentsCounter++;
                this.balance += valuePayed;
            }
        }
        else {
            let obj = {
                id: id,
                name: name,
                type: type,
                valuePayed: valuePayed
            };
            this.payments.push(obj);

            this.id = id;
            this.name = name;
            this.type = type;
            this.valuePayed = valuePayed;
            this.paymentsCounter++;
            this.balance += valuePayed;
        }
    }

    deletePayment(id) {
        let exist = false;
        let index = -1;
        let sumToSub = 0;
        for (let obj of this.payments) {
            if (obj.id === id) {
                index = this.payments.indexOf(obj);
                sumToSub += obj.valuePayed;
                exist = true;
            }
        }
        if (exist === false) {
            throw new Error('ID not found!')
        }
        else {
            this.payments.splice(index, 1);
            this.paymentsCounter--;
            this.balance -= sumToSub;
        }
    }

    get(id) {
        let exist = false;
        let string = '';
        let prec = this.precision;
        let result = '';
        for (let obj of this.payments) {
            if (obj.id === id) {
                exist = true;
                result = `Details about payment ID: ${obj.id}\n- Name: ${obj.name}\n- Type: ${obj.type}\n- Value: ${obj.valuePayed.toFixed(prec)}`;
            }
        }
        if (exist === false) {
            throw new Error('ID not found!')
        }
        return result;
    }

    toString() {
        return `Summary:\n
        - Payments: ${this.paymentsCounter}\n
        - Balance: ${this.balance.toFixed(this.precision)}`
    }
}

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());