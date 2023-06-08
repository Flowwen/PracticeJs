
/*Closure example*/
// function outter ()
// {
//     var x = 10;
//     function inner1 ()
//     {
//         console.log(x);
//     }

//     return function inner2() {
//        inner1();
//     }

// }

// outter()();



/*Consturctor function */


function Counter ()
{

    var count = 0;

    this.incrementCounter = function (){
        count++; 
        console.log(count);
    }

    this.decrementCounter = function (){
        count--; 
        console.log(count);
    }

}


var counter = new Counter();

counter.incrementCounter();
counter.decrementCounter();

