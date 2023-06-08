console.log("Start");

function cb() {
    console.log("Call back");
}

setTimeout(cb, 5000);

console.log("End");

let startTimer = new Date().getTime();

let breakTime = startTimer;
while (breakTime < startTimer + 10000){    //blocking main thread. (call stack)
    breakTime = new Date().getTime();
}

console.log(`While expires : ${breakTime}`);