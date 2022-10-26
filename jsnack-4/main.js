// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
const guests=["mario","filippo","luca","simona"];
//  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
const name2= prompt("inserisci il tuo nome");
let guestname= false;
for(let i=0; i<guests.length; i++ ){
   if(name2=== guests[i]){
      guestname=true;
   }
}
if(guestname){
   alert("Benvenuto alla festa")
}else{
   alert("accesso negato")
}