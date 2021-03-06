let extensible = (function () {
    let id = 0;

    return class Extensible {
        constructor(){
            this.id = id++;
        }

        extend(template){
            for (let prop of template) {
                if(typeof prop === "function"){
                    Extensible.prototype[prop] = template[prop];
                }
                else {
                    this[prop] = template[prop];
                }
            }
        }
    }
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);