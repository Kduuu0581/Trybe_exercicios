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

const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
if (fraseArray[index] === 'x') {
  fraseArray[index] = nome;
}
  }
  return fraseArray.join(' ');
};
console.log(substituaX('Romario'));

const minhasSkills = (func) => {
const skills = ['JavaScript', 'HTML', 'CSS'];
let resultado = {
  ${func}
  `Minhas três principais habilidades são:`;
  skills.forEach((skill) => {
    resultado = `${resultado}
    - ${skill}`;
}); // reatribui e adiciona a skill atual a variável resultado
return resultado;
};
console.log(minhasSkills(substituaX('Romario')));
