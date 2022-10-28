"use strict"
// Crea un array di numeri interi 
const listNumbers=[1,2,3,4,5,6,7,8,9,10]

// fai la somma di tutti gli elementi  che sono in posizione dispari

let oddNumber= 0;

for(let i=0; i<listNumbers.length; i++){
   if(i %2 ==1){
      oddNumber= oddNumber+ listNumbers[i];
   }
}
console.log(oddNumber)