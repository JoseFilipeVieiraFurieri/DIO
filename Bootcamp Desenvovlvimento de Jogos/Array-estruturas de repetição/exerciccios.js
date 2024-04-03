// Media de notas

const notas = [ 6, 7, 5, 9 , 10]

let mediaTotal = 0

for (let index = 0; index < notas.length; index++) {
    
    mediaTotal += notas[index]
    
}

const media = mediaTotal / notas.length

console.log(media);


// imprimir tabuada

const tabuada = (number) => {
   
    for (let index = 1; index <= 10; index++) {
        
        console.log(`${number} x ${index} =`, number * index);
        
    }
}

tabuada(5)

// Numeros pares

const numberList = [ 5, 6 , 7 , 10 , 12 , 14, 20 , 23];

const evenNumber = [];

// For classico

for (let i = 0; i < numberList.length; i++) {
    
    if ( numberList[i] % 2 === 0) {
        evenNumber.push(numberList[i])
    }
    
}

console.log('Numeros Pares: ', evenNumber);