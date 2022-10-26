// Il software deve chiedere per 10 volte all’utente di inserire un numero
let amount= 0
// Il programma stampa la somma di tutti i numeri inseriti
for(let i=0; i<=3; i++){
   const number= Number(prompt("inserisci un numero"))
   amount += number
}
console.log("totale:${amount}")