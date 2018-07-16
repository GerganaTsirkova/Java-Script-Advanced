let manager = function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let appleRecipe = {
        carbohydrate: 1,
        flavour: 2
    };
    let coke = {
        carbohydrate: 10,
        flavour: 20
    };
    let burger = {
        carbohydrate: 5,
        fat: 7,
        flavour: 3
    };
    let omelet = {
        protein: 5,
        fat: 1,
        flavour: 1
    };
    let cheverme = {
        protein: 10,
        carbohydrate: 10,
        fat: 10,
        flavour: 10
    };
    return function (input) {
        let tokens = input.split(' ');
        if (tokens[0] === 'restock') {
            let element = tokens[1];
            let qty = Number(tokens[2]);
            robot[element] += qty;
            return 'Success';
        }
        else if (tokens[0] === 'prepare') {
            let recipe = tokens[1];
            let number = Number(tokens[2]);
            switch (recipe) {
                case 'apple':
                    if (number * appleRecipe.carbohydrate > robot.carbohydrate) {
                        return 'Error: not enough carbohydrate in stock';
                    }
                    else if (number * appleRecipe.flavour > robot.flavour) {
                        return 'Error: not enough flavour in stock';
                    }
                    else {
                        robot.carbohydrate -= number * appleRecipe.carbohydrate;
                        robot.flavour -= number * appleRecipe.flavour;
                        return 'Success';
                    }
                    break;
                case 'coke':
                    if (number * coke.carbohydrate > robot.carbohydrate) {
                        return 'Error: not enough carbohydrate in stock';
                    }
                    else if (number * coke.flavour > robot.flavour) {
                        return 'Error: not enough flavour in stock';
                    }
                    else {
                        robot.carbohydrate -= number * coke.carbohydrate;
                        robot.flavour -= number * coke.flavour;
                        return 'Success';
                    }
                    break;
                case 'burger':
                    if (number * burger.carbohydrate > robot.carbohydrate) {
                        return 'Error: not enough carbohydrate in stock';
                    }
                    else if (number * burger.flavour > robot.flavour) {
                        return 'Error: not enough flavour in stock';
                    }
                    else if (number * burger.fat > robot.fat) {
                        return 'Error: not enough flavour in stock';
                    }
                    else {
                        robot.carbohydrate -= number * burger.carbohydrate;
                        robot.flavour -= number * burger.flavour;
                        robot.fat -= number * burger.fat;
                        return 'Success';
                    }
                    break;
                case 'omelet':
                    if (number * appleRecipe.protein > robot.protein) {
                        return 'Error: not enough protein in stock';
                    }
                    else if (number * appleRecipe.fat > robot.fat) {
                        return 'Error: not enough fat in stock';
                    }
                    else if (number * appleRecipe.flavour > robot.flavour) {
                        return 'Error: not enough flavour in stock';
                    }
                    else {
                        robot.protein -= number * omelet.protein;
                        robot.fat -= number * omelet.fat;
                        robot.flavour -= number * omelet.flavour;
                        return 'Success';
                    }
                    break;
                case 'cheverme':
                    if (number * cheverme.protein > robot.protein) {
                        return 'Error: not enough protein in stock';
                    }
                    else if (number * cheverme.carbohydrate > robot.carbohydrate) {
                        return 'Error: not enough carbohydrate in stock';
                    }
                    else if (number * cheverme.fat > robot.fat) {
                        return 'Error: not enough fat in stock';
                    }
                    else if (number * appleRecipe.flavour > robot.flavour) {
                        return 'Error: not enough flavour in stock';
                    }
                    else {
                        robot.fat -= number * cheverme.fat;
                        robot.carbohydrate -= number * cheverme.carbohydrate;
                        robot.flavour -= number * cheverme.flavour;
                        robot.protein -= number * cheverme.protein;
                        return 'Success'
                    }
                    break;
            }
        }
        else if (tokens[0] === 'report') {
            console.log(`protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`);
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
        }
    };
};

manager('restock flavour 50', 'Success');
manager('prepare coke 4');
solution('restock flavour 50');
solution('prepare coke 4');





