function solve(arr,order) {
    if(order==='asc'){
        arr = arr.sort((a,b)=>{
            return a-b;
        })
    }
    else {
        arr = arr.sort((a,b)=>{
            return b-a;
        })
    }
    return arr;
}

solve([14, 7, 17, 6, 8], 'asc');