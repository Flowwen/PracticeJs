
//Function statement aka function declaration 

// function xyz (){
//     console.log("Hello world");   
// }


// //function expression


// var b = function (){   //Anonymous functions are functions without any name
    
//     console.log("b called");
// }

// xyz();
// b();



// function expression with named function

// var c = function name (){
//     console.log("c called");
// }

// c();



//First Class functions / FirstClass citizen 


var d = function (params1)
{
    return params1; 
}



d(function (){
    console.log("First class functions are those which are used values, parameters or returned as a function");
})();