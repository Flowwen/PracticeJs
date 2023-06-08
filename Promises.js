

// const url = "https://api.github.com/users/flowwen"
// const users = fetch(url)

// console.log(users);


/*Advantage over callback chaining */

const cart = ["shoes","shirt","trousers","watches","t-shirts"]
createOrder(cart)
.then((oredrId) => procceedToPayment(oredrId))
.then((paymentInfo) => showOderSummary(paymentInfo))
.then((summaryInfo) => updateWalletBalance(summaryInfo));


/*Code looks much cleaner and maintanable */