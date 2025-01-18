let drinkRequest = "fanta"
let reply;
let takeOut = true
let bottlePrice = 100
let food = true
let foodPrice = 1000

if (drinkRequest){
    reply = `you have an order for ${drinkRequest}`
    if(drinkRequest === "fanta"){
        if(takeOut){
            reply = `your order of ${drinkRequest} has been taken, we will add N${bottlePrice} to the price please proceed to payment`
     }else{reply = `your order of ${drinkRequest} has been taken, please proceed to payment`}

     if(food){
        reply = `your order of ${drinkRequest} has been taken, we will add N${foodPrice} to the price please proceed to payment`
 }else{reply = `your order of ${drinkRequest} has been taken, please proceed to payment`}
        
}else{
    reply = `we do not have $(drinkRequest) available at the moment, please check the menu to see other options`
}
}else{
    reply = `sorry we did not get your order`
}

console.log(reply);