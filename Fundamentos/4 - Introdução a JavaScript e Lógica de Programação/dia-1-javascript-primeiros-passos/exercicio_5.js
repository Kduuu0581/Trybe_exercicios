let a = 90;
let b = 60;
let c = 30;

let somaAngulos = a + b + c;
let todosAngulosPositivos = a > 0 && b > 0 && c > 0;

if (todosAngulosPositivos) {
  if (somaAngulos === 180) {
    console.log("verdadeiro");
  } else {
    console.log("Falso");
  }
} else {
  console.log("Erro!");
}

// exercico para o projeto