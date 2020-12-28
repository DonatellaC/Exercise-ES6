// ************************ Exercici 2 ************************ 

// ************ Converteix a funcions fletxa: ************

// function multiply(num1, num2) {
//    return num1 * num2;
// }

let multiply = (num1, num2) => {
   return num1 * num2;
};

console.log(multiply(6, 4));

// ************ Converteix a funcions fletxa: ************

// function toCelsius(fahrenheit) {
//    return (5/9) * (fahrenheit-32);
// }

let toCelsius = (fahrenheit) => {
   return (5/9) * (fahrenheit-32);
}

console.log(toCelsius(86));

// ************ This function returns a string padded with leading zeros ************


// function padZeros(num, totalLen) {
//    var numStr = num.toString();
//    var numZeros = totalLen - numStr.length;
//    for (var i = 1; i <= numZeros; i++) {
//       numStr="0" + numStr; 
//       } 
//    return numStr;
//  } 

const padZeros = (num, totalLen) => {
   var numStr = num.toString();
   var numZeros = totalLen - numStr.length;
   for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
      } 
   return numStr;
 } 
 console.log(padZeros(3, 5));



// function power(base, exponent) { 
//    var result=1; 
//    for (var i=0; i < exponent; i++) { 
//          result *=base; 
//    } 
//    return result;
// } 

const power= (base, exponent) => { 
   var result=1; 
   for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
} 

console.log(power(12, 12));

// function greet(who) {
//     console.log("Hello " + who);
// }

let greet = (who) => {
   console.log(`Hello ${who}`);
}

greet("everybody");
