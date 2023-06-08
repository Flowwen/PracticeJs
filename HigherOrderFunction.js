

const radius = [3, 4, 5, 8, 10]

const CalculateArea = function (radius) {
    const result = [];

    for (let i = 0; i < radius.length; i++) {
        result.push(Math.PI * radius[i] * radius[i])
    }

    return result;
}

const CalculateCircumference = function (radius) {
    const result = [];

    for (let i = 0; i < radius.length; i++) {
        result.push(2 * Math.PI * radius[i])
    }

    return result;
}

const CalculateDiameter = function (radius) {
    const result = [];

    for (let i = 0; i < radius.length; i++) {
        result.push(2 * radius[i])
    }

    return result;
}

console.log(CalculateArea(radius));
console.log(CalculateCircumference(radius));
console.log(CalculateDiameter(radius));



// The above code is not modular and has a lot of repetitive code. 











