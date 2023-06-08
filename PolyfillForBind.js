let name = {
    firstName: 'John',
    lastName: 'Doe'
}


let printDetails = function (state, village, country) {
    console.log(`${this.firstName} ${this.lastName} ${state} - ${village} , ${country}`);
}


let printName = printDetails.bind(name, "Maharashtra", "Sangli");

printName("India");


Function.prototype.mybind = function (...args) {
    let obj = this,
        params = args.slice(1),
        referenceVar = args[0];
    return function (...args2) {
        obj.apply(referenceVar, [...params, ...args2]); // arrays concatenated. 
    }
}

Function.prototype.mybind2 = function (arg0, arg1, arg2) {
    let obj = this,
        params1 = arg1,
        params2 = arg2,
        referenceVar = arg0;
    return function (arg3) {
        obj.call(referenceVar, arg1, arg2, arg3); // arrays concatenated. 
    }
}

let myPrintName = printDetails.mybind(name, "Maharashtra", "Sangli");
myPrintName("India");



let myPrintName2 = printDetails.mybind2(name, "Maharashtra", "Sangli");
myPrintName2("India");