function solve() {
    let obj = {};
    obj['extend'] = function (template) {
        for (let key in template) {
            if(template.hasOwnProperty(key)){
                let element = template[key];
                console.log(typeof element);
                if(typeof element === 'function'){
                    obj.__proto__[key] = element;
                }
                else {
                    obj[key] = element;
                }
            }
        }
    };
    return obj;
}
let myObj = solve();
let template = {
    extensionMethod: "Pesho",
    extensionProperty: 'Gosho'
};
myObj.extend(template);
console.log(myObj);
console.log(myObj.__proto__);