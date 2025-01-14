// create 10 variables five with const and 5 with let and console.log out their data.
const studentData = {
    name: "Mary Okereke",
    class: 2010,
    department: "computerScience",
    age: 20,
    gender: "female",
}

const studentName = studentData.name
const studentAge = studentData.age
const studentDepartment = studentData.department
const studentGender = studentData.gender
const studentClass = studentData.class

console.log(studentName)
console.log(studentAge)
console.log(studentGender)
console.log(studentClass)
console.log(studentDepartment)

let foodData = {
    breakfast: "bread and tea",
    launch: "rice",
    dinner: "garri and soup",
    brunch: "cake",
    amount: 10,
}

let morningFood = foodData.breakfast
const afternoonFood = foodData.launch
const eveningFood = foodData.dinner
const middayFood = foodData.brunch
const foodQuantity = foodData.amount

console.log(morningFood)
console.log(afternoonFood)
console.log(eveningFood)
console.log(middayFood)
console.log(foodQuantity)


// Write a function called toUppercase that takes a string as input and returns the string in all uppercase letters.
let str = "meatpie";
let string = str.toUpperCase();
console.log(string)


// Write a function called wordCount that counts the number of words in a sentence. Assume words are separated by spaces.
const sentence = "Monday morning is bright.";
const words = sentence.trim().split(/\s+/);
console.log(words.length);

// Write a function called reverseString that takes a string and returns it reversed.
const stri = "Good Day";
const reverseString = stri.split('').reverse().join('');
console.log(reverseString)

// Write a function called containsSubstring that checks if a substring exists in a given string. Return true or false.
const mainString = "Hi Mary";
const subString = "Mary";
console.log(mainString.includes(subString))


// Write a function called concatenateStrings that combines two strings into one.
function concatenateStrings(string1, string2) {
    return string1 + string2;
}
const str1 = "GumiTech ";
const str2 = "Media";
console.log(concatenateStrings(str1, str2)); 

