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

