// let obj = {
//     name: "Sandy",
//     age: 27,
//     profession:"Coder"
// }

// console.log(obj.name)         // access through dot notation (.)
// console.log(obj[age])        // access through bracket notation

//** refer this link to know why there are 2 method to access object and their benefits-->
https://github.com/geeksandy66/javascript-object-access-guide/blob/main/README.md

// **** this is netsted object 

// let user = {
//     name : "Sandy",
//     address : {
//         Vill:"Sumeri Chhpar",
//         PS:"Mairwa",
//         Dist:"Siwan",
//         loaction :{
//             lat: 47.585684,
//             lan: 36.54876
//         }
//     }
// }

// let userLoc = user?.address?.loaction?.lat
// console.log(userLoc)

// *** Desctructer objects    ---- widely used in backend

// let {lat,lan} = user.address.loaction

// console.log({lat, lan})     // these are two new variable


// Destructure the key "first-name" as a variable called firstName
// const user = {
//     "first-name" : "Sandy"
// };

// let {"first-name" : firstName} = "user"

// *** loops in obj

// let user = {
//     name:"Rani",
//     age:25,
//     rel:"wife"
// }

// // for(let key in user){
// //      console.log(user[key])
// // }

// console.log(Object.keys(user))    // keep object key in a array

// let obj = {
//     name:"Sandy",
//     age:25,
//     address:{
//         state:"Bihar",
//         city:"Siwan"
//     }
    
// }

// let obj2 = {...obj};         // copy refrence in nested object and change in original if i make change in obj2
// obj2.address.state = "UK"   // it change obj state also
// console.log(obj2)
// console.log(obj)

// ** Deep Clone 

// let obj2 = JSON.parse(JSON.stringify(obj))   // this method deep clone nested string also

// // JSON.stringfy - change object into string
// // JSON.parse() - change string into json format 

// obj2.address.city = "Patna"

// console.log(obj2)
// console.log(obj)

// let role = "admin"

// let obj = {
//     name:"Sandy",
//     age:25,
//     address:{
//         state:"Bihar",
//         city:"Siwan"
//     },
//     [role] : "Rani"
    
// }

// console.log(obj)


// use for in loop to log all keys in this object 

// let newObj = {
//     name: "Mantu",
//     age: 27,
//     city: "Siwan"
// }

// for(let key in newObj){
//     console.log(key)
// }


// use Object.entries() to print all key-values pairs as:
// title: "JS Mastery"
// duraton: "4 week"

// let course = {
//     title: "JS Mastery",
//     duration: "4 week"
// }

// Object.entries(course).forEach(function(val){
//     console.log(`${val[0]}: ${val[1]}`)
// })

// let courseDetails = {
//     title: "Python for Beginners",
//     duration: "90 days",
//     instructor: "Sandy"
// }

// Object.entries(courseDetails).forEach(function(val){
//     console.log(`${val[0]} : ${val[1]}`)
// })

// use a variable to dynamcically assign a property 

// const key = "role";

// let obj = {
//     name: "Sandy",
//     [key]: "admin"
// }




// let beforeShift = {
//     name : "Rajan",
//     age : 26,
//     address:{
//         city: "Salempur",
//         dist: "Deoria"
//     }
// }


// console.log(beforeShift);

// let afterShift = JSON.parse(JSON.stringify(beforeShift));

// afterShift.address.city = "Mairwa";
// afterShift.address.dist = "Siwan"

// console.log(afterShift);




