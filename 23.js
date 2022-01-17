nomeri = [['Paolo',2],['Marzia',3]];

for (i = 0; i < nomeri.length; i++) {

    let nomero = nomeri[i];
    let nome = nomero[0];
    let numero = nomero[1];

    for (let i = 0; i < numero; i++) {
        console.log(nome);
    }
}