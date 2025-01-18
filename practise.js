function restaurantOrder(menuItem, quantity) {
    // Define the menu with prices
    const menu = {
        burger: 1500, // Price in Naira
        pizza: 3000,
        fries: 800,
        salad: 1000,
        drink: 500
    };

    // Check if the menu item exists
    if (menu[menuItem] === undefined) {
        return "Sorry, the item is not available on our menu.";
    }

    // Check if the quantity is valid
    if (quantity <= 0) {
        return "Invalid quantity. Please order at least one item.";
    }

    // Calculate the total cost
    const totalCost = menu[menuItem] * quantity;

    // Provide a response based on the total cost
    if (totalCost > 5000) {
        return `Your total is ${totalCost} Naira. Thank you for your generous order!`;
    } else if (totalCost > 2000) {
        return `Your total is ${totalCost} Naira. Enjoy your meal!`;
    } else {
        return `Your total is ${totalCost} Naira. Thank you for dining with us!`;
    }
}

// Example usage:
console.log(restaurantOrder("pizza", 2)); // Output: "Your total is 6000 Naira. Thank you for your generous order!"
console.log(restaurantOrder("burger", 1)); // Output: "Your total is 1500 Naira. Thank you for dining with us!"
console.log(restaurantOrder("pasta", 1)); // Output: "Sorry, the item is not available on our menu."
