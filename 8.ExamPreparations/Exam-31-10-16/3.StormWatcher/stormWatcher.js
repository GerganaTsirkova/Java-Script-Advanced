class Record {
    constructor(temerature, humidity, pressure, windSpeed) {
        this.id = Record.getID();
        this.temperature = temerature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
        this.weatherStatus = '';
    }

    static getID() {
        if (Record.nextID === undefined) {
            Record.nextID = 0;
        }
        return Record.nextID++
    }

    get weatherStatus(){
        return this._weatherStatus;
    }

    set weatherStatus(value) {
        this._weatherStatus = value;
        if ((this.temperature < 20)&&(this.pressure < 700 || this.pressure > 900)&& (this.windSpeed > 25)){
            this._weatherStatus = 'Stormy'
        } else {
            this._weatherStatus = 'Not stormy'
        }
    }

    toString(){
        return `Reading ID: ${this.id}\n` +
            `Temperature: ${this.temperature}*C\n` +
            `Relative Humidity: ${this.humidity}%\n` +
            `Pressure: ${this.pressure}hpa\n` +
            `Wind Speed: ${this.windSpeed}m/s\n` +
            `Weather: ${this.weatherStatus}`
    }
}

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());