// prepara un array contennte il prezzo di dieci prodotti 

// prepara un secondo array e inserisci dentro a questo solo i prezzi minori di 5 euro 
// (fallo usando un ciclo for)

let prezzi =  ['10.3', '22.7', '2.1', '3.2',
              '8.3', '6.6', '4.99', '8.99',
              '3.99', '2.2'
];

let prezzi2 = [];

for (i = 0; i < prezzi.length; i++) {
    if(prezzi[i] < 5) {
    prezzi2.push(prezzi[i]);
}

}
    console.log(prezzi2);