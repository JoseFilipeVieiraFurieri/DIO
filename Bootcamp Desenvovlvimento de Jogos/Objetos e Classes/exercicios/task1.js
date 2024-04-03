/*
  exercicio 1 - criar classe 
  exercicio 2 - criar instancia da classe
  exercicio 3 - criar metodo calcularGastoDecCombustivel ( o meu esta totalGastoViagem)
*/


class Car2 {
    marca;
    cor;
    gastoMedioFuel;

    constructor(marca, cor, kmPorlitro) {
      this.marca = marca;
      this.cor = cor;
      this.kmPorlitro = kmPorlitro;
    }

    carDescription() {
        return `O marca do carro é ${this.marca}. Ele faz por litro ${this.kmPorlitro} kms e a cor dele é um lindo ${this.cor}`;
    }

    totalGastoViagem(travelKm, priceGas) {
        const result = (travelKm / this.kmPorlitro) * priceGas
        return `O preço do gasolina é gasto na viagem é de ${result.toFixed(2)} reais`
    }
}

// tive que colocar car2 pq ele estava confundindo com outro exemplo de classe car que eu fiz
// eu usei o tanto de litros gastos por quilometro para calcular pq ja tinha a função pronta em outro exercicio

const camaro = new Car2('Camaro', 'Amarelo', 6.2)

console.log(camaro.totalGastoViagem(200, 6));
console.log(camaro.carDescription());