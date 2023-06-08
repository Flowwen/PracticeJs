
/*Examples of call back function with setTimeout example*/

setTimeout(function xyz(){
    console.log("This one is from setTimeout.");
}, 5000);

function x(y) {
    var a = 10;
    console.log("x called");
    y();
}
// function y() {
//     console.log("y called", a);
// }
// x(y);

x(function y() {
    console.log("y called");
});

/*Code to return how much time the button was clicked with closures example */
// function trackButtonClickMe (){
//     let count = 0;
//     document.getElementById("clickMe")
//     .addEventListener("click",function ClickHandler(){
//         console.log("Button clicked", ++count);
//     })
// }
// trackButtonClickMe();