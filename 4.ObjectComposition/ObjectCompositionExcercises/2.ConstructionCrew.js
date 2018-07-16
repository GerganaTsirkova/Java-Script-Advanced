function solve(object) {
    let obj = object;
    if(obj.handsShaking === true){
        let needAlcoholLevel = Number(obj.weight)*0.1*Number(object.experience)+Number(obj.bloodAlcoholLevel);
        obj.bloodAlcoholLevel = needAlcoholLevel;
        obj.handsShaking = false;
    }
    return obj;
}
solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true });
solve({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true })