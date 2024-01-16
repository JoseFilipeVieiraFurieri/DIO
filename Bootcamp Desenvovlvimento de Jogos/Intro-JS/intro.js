// Javascript 

var nome = 'filipe'

console.log(nome);

let nome2 = 'Josefina'

console.log(nome2);

const nome3 = 'Pedro'


// operadores mat

console.log(2 + 2);

console.log(10 - 2);

console.log(12 * 3);

console.log(30 / 3);

console.log(20 % 2);


// desafio 1

const fuelPrice = 5.58;
const kmLitro = 18.5;
const travelKm = 8;

const cost = (5.58 / 18.5) * 8;


const priceTravel = ( fuel, km , travel) => {
    return (fuel / km) * travel;
}

console.log(cost);

console.log(priceTravel(20, 10, 30));