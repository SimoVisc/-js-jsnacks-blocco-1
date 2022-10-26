// L’utente inserisce due parole in successione, con due prompt
const Parola1= prompt("inserisci una parola")
const Parola2= prompt("inserisci un'altra parola")
// Il software stampa prima la parola più corta, poi la parola più lunga

 if (Parola1.lenth< Parola2.lenth){
        console.log(Parola1,Parola2)
 } else{
        console.log(Parola2,Parola1)
 }
