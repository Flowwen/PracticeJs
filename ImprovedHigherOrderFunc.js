const radius = [3, 4, 5, 8, 10]


const Area = function (radius) {
    return Math.PI * radius * radius;
}

const Circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const Diameter = function (radius) {
    return 2 * radius;
}

/*
var Calculate = function (radius, logic) {
    const result = [];

    for (let index = 0; index < radius.length; index++) {
        result.push(logic(radius[index])); 
        
    }

    return result;
}
*/


// console.log(Calculate(radius,Area));
// console.log(Calculate(radius,Circumference));
// console.log(Calculate(radius,Diameter));




/* Remodeling Calculate like map function */

Array.prototype.Calculate = function (logic) {
    const result = [];

    for (let index = 0; index < this.length; index++) {
        result.push(logic(this[index])); 
        
    }

    return result;
}




console.log(radius.Calculate(Area)); // same like array.map(Area);
console.log(radius.Calculate(Circumference));
console.log(radius.Calculate(Diameter));