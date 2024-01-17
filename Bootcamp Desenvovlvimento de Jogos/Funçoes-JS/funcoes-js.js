// Function

function soma (num1, num2) {
    return num1 + num2
}

// geralmente por arrow function é mais compacto

const soma2 = (num1, num2) => num1 + num2

// nesse caso so funciona se o retorno for na mesma linha( retorno implicido), caso tenha => {} tem que ser usado return


const myName = (name) => `Seu nome é ${name}`;


// armazenar retorno de funçoes em variaveis

let nameEx = myName("Josephina");


// Juros

const percentualJuros = (valorProduto, Juros) => {
    let conversaoJuro = Juros / 100
    console.log(conversaoJuro);
    let produtoJuros = valorProduto * conversaoJuro
    let valorTotalJuros = valorProduto + produtoJuros
    return ` O acrescimo de juros é de ${produtoJuros} sendo o novo preço ${valorTotalJuros}`
}


const classificarImc = (imc) => {

    if (imc < 18.5 ) {
        return'Abaixo do peso';
    } else if (imc > 18.5 && imc < 25) {
        return 'Peso Normal';
    } else if ( imc > 25 && imc < 30) {
        return 'Acima do peso';
    } else if  (imc > 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

const calculoImc = (peso, altura) => {
    
    return peso / altura**2

}


// passando função como parametro
// funçoes podem ser atribuidas a variaveis diretamente( main() = main2 ) ou o retorno delas imc2 = calculoImc(100, 1.85) 


// organizar exemplos

const main = () => {
    console.log('Função Principal');
    console.log(classificarImc(calculoImc(40, 1.85)));
};

main();

// invocar uma função imediatamente

(function soma2(num1, num2) {
    console.log(num1 + num2);
})(12, 6);


// colocar a função entre parenteses e depois colocar outro parenteses pra inserir os parametros
// pode ser inserido para isolar funçoes e pode ser criar funçoes anonimas
