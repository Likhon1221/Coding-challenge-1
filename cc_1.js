// Task 1: Variables and Data Types

let employeeName = "Worker One"
const employeeID = 1;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



//Task 2: Compound Data Types

let products = ["Desktop", "Phone", "Laptop"];
const productDetails ={
         name: products,
         price: 1000.00,
         inStock: 10.00,
}

console.log(products, productDetails);

// Task 3: Assignment Operators
let accountBalance = 10000.00
console.log(accountBalance);

accountBalance += 5000.00
console.log(accountBalance);

accountBalance -= 3000.00
console.log(accountBalance)

accountBalance *= 3.00
console.log(accountBalance)

accountBalance %= 11.00
console.log(accountBalance)

let employeeScore1 = 20
let employeeScore2 = 10

console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);
