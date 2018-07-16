function solve(arr) {
    let outputArr = [];
    let commandExecutor = (function () {

            function add(string) {
                outputArr.push(string);
            }

            function remove(string) {
                outputArr = outputArr.filter(item => item !== string)
            }

            function print() {
                console.log(outputArr.join(','));
            }

            return {add, remove, print};
        }

    )();
    for (let i = 0; i < arr.length; i++) {
        let input = arr[i].split(' ');
        let command = input[0];
        let string = input[1];
        commandExecutor[command](string);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);