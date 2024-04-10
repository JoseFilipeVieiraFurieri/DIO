// Resumo JS

// Novamente so conceitos para relembrar

// Livescript -> Javascript ( o nome ecmascript é o nome registrado mas o js que ficou famoso)

// Linguagem alto nivel, fracamente tipada, interpretada

let nome = "Filipe"

console.log(nome);

console.log(2 + 2); 

console.log(4 - 2);

console.log(4 / 2);

console.log(6 * 3);

console.log(6 ** 2);

console.log(10 % 3);


// condicional 

const idade = 18;

if (idade > 18) {
    console.log("maior de idade");
}

switch (idade) {
    case 18:
        console.log("maior de idade, rapa");
        break

    case 20:
        console.log("menor de idade");
        break

}

// o switch so avalia valores simples, ele não funciona com expressoes( tipo idade > 18)

const ageCheck = (idade > 18 ? "maior de idade xara" : "piralho") // ternario

console.log(ageCheck);

// operadores logicos ( && , ||)

// operadores de comparação ( > , < =>, <=, ==(valor), ===(valor e tipo), =!)


// Tipos de variaveis

// let, var , const ( conceito de hoisting tem no mais detalhado no curso de desenvolvimento de jogos DIO)

// string, number, boolean, null, undefined, object

// lembrando que o hoisting sobe o declaração da variavel não o valor

// var tambem foge do escopo de função

// Laços de Repetição( ou loops)

// classico

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}

// while

let control = 2;

while (control < 10) {
    console.log(control);
    control++
}

let control2 = 4

do {
    console.log(control2);
    control2++
    
} while (control2 < 10);

// o while checa antes de entrar no bloco, o do while entra no bloco e depois checa


// o forEach e o map são mais maneiras de iterar sobre arrays, existe alem disso o for in e for each tb so que esses servem pra trabalhar
// com objetos( ou prototipos como queira chamar)


const numberList = [ 2, 3 , 5];

numberList.forEach(number => console.log(number * 2));

const numberList2 = [ 3, 6 , 8];

const mapNumber = numberList2.map(number => number / 2)

console.log(mapNumber);

// lembrar que o forEach itera sobre os elementos so que não retorna nada, ja o map retorna uma lista nova( ele não modifica a lista
// original ele retorna uma nova, importante lembrar disso)