// Function

function soma (num1, num2) {
    return num1 + num2
}

console.log(soma(2, 10));

// geralmente por arrow function é mais compacto

const soma2 = (num1, num2) => num1 + num2

// nesse caso so funciona se o retorno for na mesma linha( retorno implicido), caso tenha => {} tem que ser usado return


const myName = (name) => `Seu nome é ${name}`;

console.log(myName('filipe'));

// armazenar retorno de funçoes em variaveis

let nameEx = myName("Josephina");

console.log(nameEx);

// Juros

const percentualJuros = (valorProduto, Juros) => {
    let conversaoJuro = Juros / 100
    console.log(conversaoJuro);
    let produtoJuros = valorProduto * conversaoJuro
    let valorTotalJuros = valorProduto + produtoJuros
    return ` O acrescimo de juros é de ${produtoJuros} sendo o novo preço ${valorTotalJuros}`
}

console.log(percentualJuros(100, 10));

// organizar exemplos

const main = () => {
    console.log('Função Principal');
}
