// Exercici 6

// Reemplaça en el següent bloc de codi la promesa per aync/await:

// function b() {
//    // ...
// }
// funtion a() {
//    b().then() = > {
//    doMoreWork();
//    }
// }

function doMoreWork() {
    return new Promise((resolve, reject) => {
        resolve("Try again!")  
    })
}

function b() {
   return new Promise((resolve, reject) => {
       resolve("Success!")  
   })
}

async function a() {
  let response = await b().then(data => console.log(data));
   doMoreWork(); 
}

a();
// console.log(a());

