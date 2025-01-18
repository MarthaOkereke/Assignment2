const welcomeMessage = (user) => {
return `Welcome ${user} to glovo. Your best app, would you like to order anything today.`
}

const showUserEmail = (user) => {
    return `Welcome ${user} to glovo. This is your email.`
    }

    const showUserPassword = (user) => {
        return `Welcome ${user} to glovo. This is your password.`
        }

const user = {
    firstName: "Drake",
    email : "drakehenry@gmail.com",
    password : "*****",
}

const userName = user.firstName;
const userEmail = user.email;
const userPassword = user.password;

console.log(welcomeMessage(userName))
console.log(showUserEmail(userEmail))
console.log(showUserPassword(userPassword))

// //write a function to add numbers
// const addNumbers = (a,b) => {
//     return `Your answer is ${a,b}`
// }
//  const addition = a + b;

//  const a = 5;
//  const b = 3;

//  console.log(addNumbers(addition))
