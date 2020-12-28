// ************************ Exercici 4 ************************

// Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()
// var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Resultat per consola: 'a long time ago in a galaxy far far away'

// Nota: no fa falta fer un "join".

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let newSentence = epic.reduce((sum, currentWord) => 
    `${sum} ${currentWord}`);

console.log(newSentence);
