
const cart = ["shoes", "shirt", "trousers", "watches", "t-shirts"]

CreateOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo){
        console.log(paymentInfo);
        return showOrderSummary();
    })
    .then(function (orderSummary) {
        console.log(orderSummary);
       return updateWalletBalance()
    })
    .catch(function(err) {
        console.log(err.message);
    })
    .then(function () {
        console.log("No matter what this will always be called.");
    })


function CreateOrder(cart) {

    const promise = new Promise(function (resolve, reject) {

        if (!ValidateCart(cart)) {
            const err = new Error("Cart is invalid");
            reject(err);
        }

        const orderId = "adfadha12345";

        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
        }
        else {
            const error = new Error("There was a problem creating a new Order.");
            reject(error);
        }
    });

    return promise;
}


function ValidateCart() {
    return true;
}


function proceedToPayment(orderId){
    const promise = new Promise(function (resolve, reject) {
        resolve(`Payment for Order Id - ${orderId} successfully.`);

    });

    return promise;
}

function showOrderSummary(){
    const promise = new Promise(function (resolve, reject) {
            resolve(`Order summarry for order successfully`)
    })

    return promise;
}

function updateWalletBalance() {

    const promise = new Promise(function (resolve, reject) {
        const error = new Error(`There was a problem in updating the wallet balance`)
        reject(error);
    })  
    return promise;
}
