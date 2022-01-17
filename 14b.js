/* Una pizzeria riceve degli ordini telefonici
 Scrivere un programma che inserisce in un elenco i nuovi ordini
  e mette in forno le pizze seguwndo l'ordine */

 let ordini = []; //array vuoto

 // Una signora ordina una capricciosa 
ordini.push("capricciosa");
console.log(ordini);

 // Una signora ordina una viennese 
 ordini.push("viennese");
console.log(ordini);

 // Un signore ordina una quattro formaggi 
 ordini.push("quattro formaggi");
console.log(ordini);

 // il pizzaiolo prepara la prima pizza 
console.log("preparo una " + ordini.shift());
console.log(ordini);

 // Un signore ordina una quattro stagioni 
 ordini.push("quattro stagioni");
console.log(ordini);
 
 // Il pizzaiolo prepara la seacomnda pizza 
 console.log("preparo una " + ordini.shift());
console.log(ordini);

 // una signora ordina una diavola 
 ordini.push("diavola");
console.log(ordini);

 // Il pizzaiolo prepara un' altra pizza 
 console.log("preparo una " + ordini.shift());
console.log(ordini);

 // Il pizzaiolo prepara un' altra pizza 
 console.log("preparo una " + ordini.shift());
console.log(ordini);

 // Il pizzaiolo prepara un' altra pizza 
 console.log("preparo una " + ordini.shift());
console.log(ordini);

