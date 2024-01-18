class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }


    calcularImc = () => {
        const imc = this.peso / this.altura ** 2;
        return imc.toFixed(2);
    }

    classificarImc = () => {
        const imc = this.calcularImc();

        if (imc < 18.5 ) {
            return `${this.nome} voce esta abaixo do peso`;
        } else if (imc >= 18.5 && imc < 25) {
            return `${this.nome} voce esta com o peso normal`;
        } else if ( imc >= 25 && imc < 30) {
            return `${this.nome} voce esta acima do peso`;
        } else if (imc >= 30 && imc < 40) {
            return `${this.nome} voce esta Obeso(a)`;
        }
        
        
        return `${this.nome} voce esta com Obesidade grave`
        
      
    }

}

const paloma = new Pessoa('Paloma', 67, 1.63)

const imcPaloma = paloma.calcularImc();
console.log(imcPaloma);
const classificação = paloma.classificarImc();
console.log(classificação);

