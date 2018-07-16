function solve(name,age,weight,height) {
    let bmi = Math.round(weight/Math.pow(height/100,2));
    let status = '';
    if(bmi<18.5){
        status = 'underweight';
    }
    else if((bmi>=18.5)&&(bmi<25)){
        status = 'normal';
    }
    else if((bmi>=25)&&(bmi<=30)){
        status = 'overweight';
    }
    else {
        status = 'obese';
    }
    let personalInfo = {
        age:age,
        weight:weight,
        height:height
    };

    let person = {
        name:`${name}`,
        personalInfo:personalInfo,
        BMI:bmi,
        status:status
    };
    if(status === 'obese'){
        person['recommendation'] = 'admission required';
    }
    return person;
}

console.log(solve('Peter', 57, 82, 183));