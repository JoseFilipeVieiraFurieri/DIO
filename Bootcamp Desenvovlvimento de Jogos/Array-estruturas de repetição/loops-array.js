// Array

const frutas = [ 'banana', 'maça', 'melão']

//acessando elemento de um array

console.log(frutas[1]);

// adicionando elementos em um array

frutas.push('banana');

// adiciona no final da lista

//ou

frutas[4] = 'pitaya';




console.log(frutas);

//removendo o ultimo elemento da lista e retorna ele

frutas.pop() 

console.log(frutas);

//removendo o primeiro elemento e retorna ele

frutas.shift()

console.log(frutas);

const newFrutas = frutas.slice(1, 2)

// O slice não modifica o array original, ele cria uma copia da lista original. O 1 parametro e o começo da copia e o segundo o final, se não for especificado
// nenhuma posição ele copia o array inteiro

console.log(newFrutas);

frutas.splice(0, 1);

console.log(frutas);

// o splice remove a partir do elemento especificado n elementos. sendo 1 parametro a posição inicial e o 2 o numero de elementos removidos a partir daquela
// posição


// estruturas de repetição

const numberList = [ 5, 6 , 7 , 10 , 12 , 14, 20 , 23]

const evenNumber = [];

// For classico

for (let i = 0; i < numberList.length; i++) {
    
    if ( numberList[i] % 2 === 0) {
        evenNumber.push(numberList[i])
    }
    
}

console.log(evenNumber);

// exemplo de media

let mediaTotal = 0

for (let index = 0; index < numberList.length; index++) {
    
    mediaTotal += numberList[index]
    
}

const media = mediaTotal / numberList.length

console.log(media);

// usando o for em uma string

const world = 'abacate';

const upper = [];

for (let index = 0; index < world.length; index++) {
    upper.push(world[index].toUpperCase())
    
}

console.log(upper);

// Palavras podem ser interadas como uma lista( porque são consideradas como um array de letras), nessa caso eu estou percorrendo ele e transformando cada letra em maisusculo e colocando em 
// um novo array




