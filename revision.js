// //Array is a collection of similiar data, seperated by comma and enclosed in square brackets

// // let cars = ["Volvo", "Benze", "Maybach", "Lamborghini", 
// //     {name: "Bugatti",
// //         year: 2026,
// //         color: "Black"
// //     }, "Cybertruck"
// // ]

// // console.log(cars[4]);

// const fullName = "  David Nnamdi  "
// // console.log(fullName.trim())

// console.log(fullName.trim().toLowerCase().slice(1,5).length)


//Function are block of code designed to perform a particular task.
// Types of Function
// 1. Function Declaration
// Function Expression
// Arrow Function
// Anonymous Function
// IIFE (Immediately Invoked Function Expression)
// Function Declaration


// Function Declaration
function myFunction (a){
    const result = a.padEnd(7, "0");
    return `$${result}`
}
console.log(myFunction('1'))


//Function Expression
const addition = function(a,b){
    return a + b
}
console.log(addition(2,2))

//Arrow Function
const  simplify = (num, num1, num2)=>{
    return num * num1 + num2
}
console.log(simplify(2, 4, 2))


// Anonymous Function
()=>{}