cognomi = ['Ros', 'Barbato', 'Piazzon'];

titoli = ['ing.', 'dott', 'avv.'];

dipendenti = [];

for (i = 0; i < cognomi.length; i++) {
    let cognome = cognomi[i];
    let titolo = titoli[i];
    dipendenti.push([titolo, cognome]);
}

console.log(dipendenti);