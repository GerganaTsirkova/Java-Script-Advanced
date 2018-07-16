function argumentInfo() {
    let arr = [];
    let typeCountMap = new Map();
    for (let argument of arguments) {
        let typeArg = typeof argument;
        let str = `${typeArg}: ${argument}`;
        arr.push(str);
        if(!typeCountMap.has(typeArg)){
            typeCountMap.set(typeArg,1);
        }
        else {
            let count = Number(typeCountMap.get(typeArg))+1;
            typeCountMap.set(typeArg,count);
        }
    }
    for (let s of arr) {
        console.log(s);
    }
    let arrSec = [...typeCountMap].sort((a,b)=>b[1]-a[1]);
    for (let [type,count] of arrSec) {
        console.log(`${type} = ${count}`)
    }
}

argumentInfo(42, 'cat', 15, 'kitten', 'tomcat');