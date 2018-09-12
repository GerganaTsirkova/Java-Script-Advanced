const expect = require('chai').expect;

class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}



describe('HolidayPackage', function () {
    it("To be instance of class", function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(result).to.be.an.instanceOf(HolidayPackage);

    });
    it("Initiate with 2 strings", function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect('Italy').to.be.a('string');
        expect('Summer').to.be.a('string');
    });
    it("To have property 'showVacationers'", function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(result).to.have.property("showVacationers");
    });
    it("To have property 'addVacationer'", function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(result).to.have.property("addVacationer");
    });
    it("To have property 'generateHolidayPackage'", function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(result).to.have.property("generateHolidayPackage");
    });
    it('the prop in the constructor to be false', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(result.insuranceIncluded).to.equal(false);
    });
    it('the prop in the constructor to be false and after true', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        result.addVacationer("Xi Ang");
        result.insuranceIncluded = true;
        expect(result.insuranceIncluded).to.equal(true);
    });
    it('Must be passed 2 strings to the constructor', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(['Italy', 'Summer']).to.have.length(2);
    });
    it('the constructor to have an empty arr', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(result.vacationers).to.be.an('array');
        expect(result.vacationers.length).to.equal(0);
        expect(result.vacationers instanceof Array).to.be.equal(true);
    });
    it('check property showVacationers', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        result.addVacationer('Petar Petrov');
        result.addVacationer('PGeorgi Georgiev');
        expect(result.showVacationers()).to.equal("Vacationers:\n" + "Petar Petrov\n"+"PGeorgi Georgiev");
    });
    it('check property Show vacationer', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        let output = result.showVacationers();
        expect(output).to.equal('No vacationers are added yet');
    });
    it('check property Show vacationers', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(() => {
            result.generateHolidayPackage()
        }).to.throw('There must be at least 1 vacationer added');
    });
    it('check property vacationer', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        result.addVacationer("Pesho Gosho");
        result.addVacationer("Gosho Pesho");
        let output = result.vacationers.length;
        expect(output).to.equal(2);
    });
    it('check property addVacationer', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(() => {
            result.addVacationer()
        }).to.throw('Vacationer name must be a non-empty string');
    });
    it('check property addVacationer', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(() => {
            result.addVacationer('Peter');
        }).to.throw('Name must consist of first name and last name');
    });
    it('check property addVacationer', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        result.addVacationer('Peter Pan');
        expect('Peter Pan').to.be.a('string');
        expect('Peter Pan').includes(' ');
        result.addVacationer('Ivan Ivanov');
        expect('Ivan Ivanov').includes(' ');
        expect(result.vacationers).to.be.an('array');
        expect(result.vacationers).includes('Peter Pan');
        expect(result.vacationers).includes('Ivan Ivanov');
        expect(result.vacationers.length).to.be.equal(2);

    });
    it('check property getInsurance', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        result.addVacationer('Peter Petrov');
        expect(() => {
            result.insuranceIncluded = 'str';
        }).to.throw('Insurance status must be a boolean');
    });
    it('check property getInsurance', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        let output = result.insuranceIncluded;
        expect(output).to.be.a('boolean');
    });
    it('check property generateHolidayPackage', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        expect(() => {
            result.generateHolidayPackage();
        }).to.throw('There must be at least 1 vacationer added');
    });
    it('check property generateHolidayPackage', function () {
        let result = new HolidayPackage('Italy', 'Summer');
        result.addVacationer('Ivan Ivanov');
        result.addVacationer('Petar Petrov');
        result.addVacationer('Georgi Georgiev');
        result.insuranceIncluded=false;
        expect(result.generateHolidayPackage()).to.equal('Holiday Package Generated\n' +
            'Destination: Italy\n' +
            'Vacationers:\n' +
            'Ivan Ivanov\n' +
            'Petar Petrov\n' +
            'Georgi Georgiev\n' +
            'Price: 1400');
    });
    it('check property generateHolidayPackage', function () {
        let result = new HolidayPackage('Italy', 'Winter');
        result.addVacationer('Ivan Ivanov');
        result.addVacationer('Petar Petrov');
        result.insuranceIncluded=true;
        expect(result.generateHolidayPackage()).to.equal('Holiday Package Generated\n' +
            'Destination: Italy\n' +
            'Vacationers:\n' +
            'Ivan Ivanov\n' +
            'Petar Petrov\n' +
            'Price: 1100');
    });
    it('check property generateHolidayPackage', function () {
        let result = new HolidayPackage('Italy', 'Autumn');
        result.addVacationer('Ivan Ivanov');
        result.addVacationer('Petar Petrov');
        result.insuranceIncluded=true;
        expect(result.generateHolidayPackage()).to.equal('Holiday Package Generated\n' +
            'Destination: Italy\n' +
            'Vacationers:\n' +
            'Ivan Ivanov\n' +
            'Petar Petrov\n' +
            'Price: 900');
    });
    it('check property generateHolidayPackage', function () {
        let result = new HolidayPackage('Italy', 'Spring');
        result.addVacationer('Ivan Ivanov');
        result.addVacationer('Petar Petrov');
        result.insuranceIncluded=false;
        expect(result.generateHolidayPackage()).to.equal('Holiday Package Generated\n' +
            'Destination: Italy\n' +
            'Vacationers:\n' +
            'Ivan Ivanov\n' +
            'Petar Petrov\n' +
            'Price: 800');
    });
});

