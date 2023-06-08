let name = {
    firstName: "Prathamesh",
    lastName: "Patil",
}

let name2 = {
    firstName: "Bhupinder",
    lastName: "Singh",
}

let name3 = {
    firstName: "Nitesh",
    lastName: "Yadav",
}


let name4 = {
    firstName: "Bhavin",
    lastName: "Kotwani",
}


let printDetails = function (state, village) {
    console.log(`${this.firstName} ${this.lastName} ${state} - ${village}`);
}


printDetails.call(name, "Maharashtra", "Sangli");
printDetails.call(name2, "Punjab", "Amritsar");

printDetails.apply(name3, ["UttarPradesh", "Azamgadh"]);

let printAllDetails = printDetails.bind(name4, "Sindh", "Karachi");

printAllDetails();