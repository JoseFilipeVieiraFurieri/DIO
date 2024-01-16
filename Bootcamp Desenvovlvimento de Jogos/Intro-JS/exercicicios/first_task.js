// desafio 1

const fuelPrice = 5.58; // cada litro custa esse valor //
const kmLitro = 18.5; // 1 litro faz 18.5 km //
const travelKm = 8; // a viagem foi de 8 km //

const cost = (100 / 20) * 10;

console.log(cost);


const priceTravel = ( fuelPrice, kmPerFuel , travelDistance) => {
    let result = ( travelDistance / kmPerFuel) * fuelPrice;
    return result.toFixed(2)
}

console.log(priceTravel(5.79, 1, 100));


// second way

const price1 = 8 / 18.5;

const price2 = price1 * fuelPrice

console.log(price2.toFixed(2));

// o toFixed converte o resultado em no maximo duas casas decimais( ele retorna uma string), serve pra arrendodar valores , em preço se utiliza no dia a dia
// duas casas decimais


/*
 O certo é dividir primeiro a distancia percorrida por quanto o caro faz por quilometro ( so dividir o que esta na mesma unidade, km por km, metro por metro)
 Se o carro percorreu faz 20 km por litro para ter quanto ele gastou e so divir a distancia percorrida pelo tanto que ele faz por litro ( 100 / 20). Ou seja
 ele consumiu 5 litros  na viagem e cada litro custa 10 reais.

 obs : o esquema da função esta certo / o da const esta a mesma coisa so que fora da função
*/

// desafio 2

const fuelPriceGas = 5.58; // cada litro custa esse valor //
const fuelPriceEta = 3.64;
const kmLitroGas = 18.5; // 1 litro faz 18.5 km //
const kmLitroEta = 10.1;
const travelKm2 = 8; // a viagem foi de 8 km //
const fuelType = 'gas'

if (fuelType === 'etanol') {
    const result = (travelKm2 / kmLitroEta) * fuelPriceEta
    return console.log(`O preço do total de etanol gasto na viagem é ${result.toFixed(2)}`);
} else {
    const result = (travelKm2 / kmLitroGas) * fuelPriceGas
    return console.log(`O preço do gasolina é ${result.toFixed(2)}`)
}

// Eu coloquei ai pra difenciar gasolina do etanol alem do preço o consumo apesar do exercicio não falar, porque o consumo por quilometro de gasolina e alcool
// varia no mesmo carro ( o preço que coloquei do etanol eu inventei mesmo pq os preços variam entre cidades e até mesmo distribuidoras)


// exercicio 1

// Media das notas

const averageScore1 = 4;
const averageScore2 = 4;
const averageScore3 = 4;

const averageGrade = (averageScore1 + averageScore2 + averageScore3) / 3;

if (averageGrade >= 7) {
    console.log("Passou de semestre, bora entornar o caneco");
} else if ( averageGrade >= 5) {
    console.log("Recuperação seu folgadinho!!!!");
} else {
    console.log("Reprovado, acabou o fortnite moleque!!!");
}

// exercicio 2

const peso = 40;
const altura = 1.89;

const imc = peso / altura**2

console.log(imc);

if (imc < 18.5 ) {
    console.log('Abaixo do peso');
} else if (imc > 18.5 && imc < 25) {
    console.log('Peso Normal');
} else if ( imc > 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc > 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}

const square = 2**2;
console.log(square);

const num = 2

console.log(Math.pow(num, 2))


// exercicio 3

const metodoPagamento = 'PIX';
const numeroParcelas = 2;
const valorProduto = 50.00;

if (metodoPagamento === "parcelado") {
    if ( numeroParcelas > 2) {
        const result = valorProduto * 1.10
        console.log(`O valor do produto total parcelado em ${numeroParcelas} é ${result.toFixed(2)}`);
    } else {
        console.log(`O valor total do produto é ${valorProduto}`);
    }
} else if (metodoPagamento === "debito") {
    const result = valorProduto * 0.9
    console.log(`O valor do produto com o desconto aplicado(10%) é ${result}`);
} else {
    const result = valorProduto * 0.85;
    console.log(`O valor do produto com o desconto aplicado(15%) é ${result}`)
}

// posso simplificar a entrada (1 - debito, 2 - credito, 3 - debito, 4- credito e numero de parcelas maior de 2), no entanto eu pensei no jeito mas complicado,
// mas o importante é que funcionou


