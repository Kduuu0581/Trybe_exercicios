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

// Crie um array com strings no formato nome_do_livro - genero_do_livro - nome_da_pessoa_autora
// Exemplo: "O Senhor dos Anéis - Fantasia - J. R. R. Tolkien"

const resultado = [
  "As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin",
  "O Senhor dos Anéis - Fantasia - J. R. R. Tolkien",
  "Fundação - Ficcao Cientifica - Isaac Asimov",
  "Duna - Ficção Cientifica - Frank Herbert",
  "A Coisa - Terror - Stephen King",
  "O Chamado de Cthulhu - Terror - H. P. Lovecraft",
];

function formatonomesLivros() {
  const livros = books.map((livro) => {
    return `${livro.name} - ${livro.genre} - ${livro.author.name}`;
  });
}

//Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade
//Use as funções map e sort para criar o array de objetos.

const resultado2 = [
    {
        age: 31,
        author: 'Isaac Asimov',
    },
    {
        age: 38,
        author: 'H. P. Lovecraft',
    },
    {
        age: 39,
        author: 'Stephen King',
    },
    {
        age: 43,
        author: 'George R. R. Martin',
    },
    {
        age: 45,
        author: 'Frank Herbert',
    },
    {
        age: 62,
        author: 'J. R. R. Tolkien',
    }
];

function nomeEidade() {
    return livros.map((livro) => ({
        author: livro.author.name,
        age: livro.releaseYear - livro.author.birthYear,
    }))
    .sort((a, b) => a.age - b.age);
};

//Crie um array com todos os objetos que possuem gênero ficção cientifica ou fantasia
//Use a função filter para criar o array

function fantasiaOuFiccao() {
    return livros.filter((livro) => livro.genre === 'Fantasia' || livro.genre === 'Ficção Cientifica')};
 
 //Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho
 //Use a função filter e sort
 
function livrosMaisVelhos() {
    return livros.filter((livro) => livro.releaseYear > 1960).sort((a, b) => b.releaseYear - a.releaseYear)};

 //Crie um array em ordem alfabética panas com os nomes de todas as pessoas autoras doe ficção cientifica ou fantasia
//Use a função map e sort   

function autoresFiccaoOuFantasia() {
    return livros.filter((livro) => livro.genre === 'Fantasia' || livro.genre === 'Ficção Cientifica')
    .map((livro) => livro.author.name)
    .sort()};

//Crie um array com o nome de todos os livors com mais de 60 anos de publicação
//Use a função map

function livrosMaisVelhos() {
    return livros.filter((livros) => livros.releaseYear > 1960).map((livros) => livros.name)};

//Encontre o nome do livro escrito pela pessoa cuko nome começa com 3 iniciais
//Cada inicial termina com um ponto
//Use a função filter

const resultado3 = 'O Senhor dos Anéis';

function autorCom3IniciaisNoNome() {
  return livros.find((livro) => (livro.author.name.split(' ').filter((palavra) => 
  (palavra.endsWith('.')).length === 3)).name);
};

