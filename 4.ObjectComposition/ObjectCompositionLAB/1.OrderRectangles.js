function solve(arr) {
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {
            width: arr[i][0],
            height: arr[i][1],
            area: function () {
                return this.width*this.height;
            },
            compareTo:function(other){
                let diff = other.area() - this.area();
                if(diff === 0){
                    return other.width - this.width;
                }
                else {
                    return diff;
                }
            }
        };
        arrResult.push(obj);
    }
    return arrResult.sort((a,b)=>a.compareTo(b));
}

console.log(solve([[10, 5], [5, 12]]));
console.log(solve([[10, 5], [3, 20], [5, 12]]));