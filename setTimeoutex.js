
/* Example of setTimeout 

function example ()
{
    var i = 1;
    setTimeout(function () {
        console.log(i);
    },3000)

    console.log("Namaste javascript");
}

example();

*/


/*Example of setTimeout of printing after every 1 sec */

// function example() {                        // here all the time 5 will printed since the function inside setTimeout poins to the same memory location of i variable

//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000)
//     }
// }

// example();



/*Example of setTimeout of printing after every 1 sec with using let*/


// function example() {
    
//     for(let i = 1; i<=5; i++){                // since let being blocked scope every time new copy i would be created and all function will point to seperate memory location of i
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000)
//     }
// }

// example();



/*Example of setTimeout of printing after every 1 sec with using var*/

function example() {
                                                // since var being enclosed in a function every time new copy i would be created and all function will point to seperate memory location of i
    for(let i = 1; i<=5; i++){   
        function closure (x){
            setTimeout(function () {
                console.log(x);
            }, x * 1000)            
        } 
        
        closure(i);
    }
}

example();