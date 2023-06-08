

const users = [
    {
        firstName : "Prathamesh",
        lastName : "Patil",
        Age : "25"
    },
    {
        firstName : "Atharva",
        lastName : "Patil",
        Age : "88"
    },
    {
        firstName : "Rohit",
        lastName : "Jadhav",
        Age : "42"
    },
    {
        firstName : "Shubham",
        lastName : "Kasar",
        Age : "35"
    },
    {
        firstName : "Ajinkya",
        lastName : "Bhilare",
        Age : "53"
    },
    {
        firstName : "Fabian",
        lastName : "Fernandes",
        Age : "16"
    },
    {
        firstName : "Siddhesh",
        lastName : "Pednekar",
        Age : "42"
    },
    {
        firstName : "Mandar",
        lastName : "Shevade",
        Age : "53"
    }
]


// const output = {"RNo" : 1, "Result" : true}; 

// console.log(output["RNo"]);      //Access a value from object by key.


// Code to find count of aeges. {42 : 2, 77 : 1}


// const output = users.reduce(
//     (acc,curr) => {

//         if (acc[curr.Age])
//         {
//             acc[curr.Age] += 1;
//         }
//         else
//             acc[curr.Age] = 1;

//         return acc;
//     }
// ,{})

// console.log(output); 


//Code to find out the first name of users whose age is less than 50 using reduce. 

const result = users.reduce(
    (acc,curr) => {
        
        if (curr.Age < 50)
        {
            acc.push(curr.firstName);
        }
        return acc;
    }
,[])

console.log(result);