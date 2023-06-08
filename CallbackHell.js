const cartItems = ["shoes","shirt","trousers","watches","t-shirts"]


api.createOrder(cartItems,()=>{
  api.proceedToPayment(() => {
    api.showOderSummary(() => {
        api.updateWalletBalance()
    })
  })   
}) 

/*  1.The above chaining of callback functions is called callback which makes code look unreadable and unmaintainable
    2.This also causes inversion of control where in now the control is given to the fucntion which will execute the call back function.
      Hence blindly trusting the Higher order function as we don't know what logic might be present (as it migt be bugged or it may not execute the cb at all) 
      beneath that fucntion which may cause alot of problems.
*/