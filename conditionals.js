// Create an algorithm using javascript conditionals that fulfils the logic of a small scale restaurant. Use if / else / else if statement and any other paramater you see fit
function restaurantOrder(menuItem, quantity){
//   define the menu with their prices
    const menu = {
        rice : 2000,
        beans : 1500,
        meat : 1000,
        water : 200,
    };


// check if the menu item is exists
if (menu[menuItem] === undefined) {
    return "Sorry, the item is not available on our menu.";
}

// check if the order quanity is valid
if (quantity <= 0 ) {
    return "Invalid order, please order at least one item.";
}

// calculate the total cost
const totalCost = menu[menuItem] * quantity;

// provide a response based on the total cost
if (totalCost > 5000){
    return `The cost of your order is ${totalCost} Naira. Thank you for your order, kindly proceed with payment.`
}
else if(totalCost >2000){
    return `The cost of your order is ${totalCost} Naira. To receive your order, kindly proceed with payment.`
}
else{
    return `The cost of your order is ${totalCost} Naira. Kindly proceed with payment.`
}

}

console.log(restaurantOrder("rice", 3));
console.log(restaurantOrder("beans", 2));
console.log(restaurantOrder("meat", 2));
console.log(restaurantOrder("water", 1))
console.log(restaurantOrder("plaintain", 2));
