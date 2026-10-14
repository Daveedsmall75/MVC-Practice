// const name = "David Nnamdi Amarikwa"
// const promise = new Promise((resolve, reject)=>{
//     if (name === "David Nnamdi Amarikwa") {resolve("Registration successful")
//     } else {
//     reject("Registration failed")
//     }
// })

// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })  



// async function greet(){
//     const message = await Promise.resolve("Hello everyone");
//     console.log(message)
// }

// greet()


// async function calculate(){
//     console.log("Starting");

//     const result = await Promise.resolve(50);

//     console.log(result);
//     console.log("Finished");
// }

// calculate()


// const fs = require('fs');

// async function readUsers(){
//     const data = await fs.promises.readFile('user.json', 'utf-8');

//     console.log(data);
// }
// readUsers()



// const fs = require('fs')

// async function readFile(){
//     const data = await fs.promises.readFile('user.json', 'utf-8')
//     const user = JSON.parse(data)

//     return user
// } 

// readFile().then((result)=>{
//     console.log(result)
// })

// .catch((error)=>{
//     console.log('Error reading file:')
// })





const fs = require('fs')

const readFile = async ()=>{
    const data = await fs.promises.readFile('./model/database.json', 'utf-8')
    const updatedData = JSON.parse(data)

    return(updatedData)
}

readFile().catch((error)=>{
    console.log('Error reading file')
})
.then((result)=>{
    console.log(result)
})