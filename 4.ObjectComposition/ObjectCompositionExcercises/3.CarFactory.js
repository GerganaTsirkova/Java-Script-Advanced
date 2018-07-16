function solve(carNeeded) {
    let car = {};
    let powerCar;
    let volumeCar;
    if (carNeeded.power <= 90) {
        powerCar = 90;
        volumeCar = 1800;
    }
    else if ((carNeeded.power > 90) && (carNeeded.power <= 120)) {
        powerCar = 120;
        volumeCar = 2400;
    }
    else {
        powerCar = 200;
        volumeCar = 3500;
    }

    let arr = [];
    let numWheels = Number(carNeeded.wheelsize);
    if (numWheels % 2 !== 0) {
        for (let i = 0; i < 4; i++) {
            arr.push(numWheels);
        }
    }
    else {
        for (let i = 0; i < 4; i++) {
            arr.push(numWheels - 1);
        }
    }
    car['model'] = carNeeded.model;
    car['engine'] = {power: powerCar, volume: volumeCar};
    car['carriage'] = {type: carNeeded.carriage, color: carNeeded.color};
    car['wheels'] = arr;
    console.log(car);
    return car;
}

solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});