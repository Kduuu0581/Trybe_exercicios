//1 - Dada uma matriz, transforme em um array
const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten(arrays) {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten(arrays));

//Exercicio 2 a 6

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//2 - Crie uma string com os nomes de todas as pessoas autoras
//Use a função reduce

const resultado =
  "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return pessoasAutoras.reduce((acc, curr) => {
    return acc + curr.author.name + ", ";
  }, "");
}

//3 - Calcule a média de idade de todas as pessoas autoras tinham quandos seus livros foram lançados
//Use a função reduce

const resultado2 = 43;

function mediaIdade() {
  return (
    pessoasAutoras.reduce((acc, curr) => {
      return acc + (curr.releaseYear - curr.author.birthYear);
    }) / pessoasAutoras.length
  );
}

//4 - Encontre o livro com o maior nome
//Use a função reduce

const resultado3 = {
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  genre: "Fantasia",
  author: {
    name: "George R. R. Martin",
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return livros.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) {
      return curr;
    }
    return acc;
  });
}

//5 - dada o array de nomes, retorne a quantidade de vezes em que aparece a letra a maiúscula ou minúscula
//Use a função reduce

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce(
    (accLetraA, nome) =>
      (accLetraA += nome
        .split("")
        .reduce(
          (acc, letra) => (acc += letra === "a" || letra === "A" ? 1 : 0),
          0
        )),
    0
  );
}
console.log(containsA());
