// Parte 1

// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
//     ifScope = ifScope + " ótimo, fui utilizada no escopo !";
//     console.log(ifScope);
//   } else {
//     let elseScope = "Não devo ser utilizada fora meu escopo (else)";
//     console.log(elseScope);
//   }
//   // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    // ifScope = ifScope + " ótimo, fui utilizada no escopo !";
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};
console.log(testingScope(false));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(
  `Os números ${oddsAndEvens.sort(function (a, b) {
    return a - b;
  })} se encontram ordenados de forma crescente!`
);
// será necessário alterar essa linha 😉

const fatorial = (integer) => {
let fatorial = 1;
for (let index = 1; index < integer; index+=1) {
  fatorial *= index;
  }
  return fatorial;
};
console.log(fatorial(5));