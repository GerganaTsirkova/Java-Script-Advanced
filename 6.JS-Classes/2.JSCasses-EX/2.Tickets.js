function solve(arr,sortingCriteria) {
    class Ticket {
        constructor(destination,price,status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let result = [];
    for (let str of arr) {
        let [destination,price,status] = str.split('|');
        let ticket = new Ticket(destination,price,status);
        result.push(ticket);
    }


    return result.sort((a,b) => a[sortingCriteria] > b[sortingCriteria])
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));