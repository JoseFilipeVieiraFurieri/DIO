// Objetos e classes

const name1 = {
    nome: 'Aparecido',
    sobrenome: 'Silva Sauro',
    idade: 20,
    descricao: falarNome = (nome) => `meu nome é ${nome}`
}

//Acessando os dados do objeto

console.log(name1.sobrenome);

// ou 

console.log(`Seu nome é ${name1.nome} ${name1.sobrenome} e voce tem ${name1.idade} de idade`);

// editanto valores de um objeto

name1.idade = 44;

console.log(name1.idade);

console.log(typeof name1);

// so colocando o uso do typeof para relembrar

// usando metodos do objeto

console.log(name1.descricao('Josefina'));

// exemplo de uso de this

// obs : no python um analogo do this , seria o self

const name2 = {
    nome: 'Carlinhos',
    sobrenome: 'Gonzaga',
    idade: 42,
    endereco: 'Paratinga-MG',
    apresentar: function apresentar () {
        return `Oi, meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} e mora em ${this.endereco}`   
    }
}

console.log(name2.apresentar());

// O this representa nesse caso o objeto ( so passar o mouse por cima pra ver)
/* encima tambem a um exemplo de strings literals ele por algum motivo usou na aula mas não explicou
   ele serve pra acessar diretamente os valores da variavel em uma string, a sintaxe e sim e so usar na frase
   um `` e dentro colocar o ${} tipo frase1 = `Joao tem ${idade}` 
*/

// vc pode acessar os atributos atraves de []

name1['nome'] = 'Marcio'

// acesso dinamico

console.log(name1.nome);


console.log(8 * 16)

// Classes

class Person {
    nome;
    sobrenome;
    endereco;
    idade;



}

const filipe = new Person() // instanciando a classe Person
filipe.nome = 'Filipe' // atribuindo um valor ao atb da instancia filipe, geralmente isso é feito com o construtor ( a classe acima não possui)

console.log(filipe.nome);

// construtor


class Car {
    modelo;
    montadora;
    numeroPortas;
    kmPorHora;

    constructor(modelo, montadora, numeroPortas, kmPorHora) {
      this.modelo = modelo;
      this.montadora = montadora;
      this.numeroPortas = numeroPortas;
      this.kmPorHora = kmPorHora;
    }

    carDescription() {
        return `O modelo do carro é ${this.modelo} feito pela ${this.montadora}. Ele faz ${this.kmPorHora} km/h e tem ${this.numeroPortas} portas`
    }
}


const chevette = new Car('Chevette rete', 'Tião motores', 4, 80)
const fusca = new Car('Fusca batido', 'Tião motores', 4 , 70)

console.log(chevette.carDescription());

const compararVeloCarros = (car1, car2) => {

    if (car1.kmPorHora > car2.kmPorHora ) {
        return `O ${car1.modelo} é mais veloz que o ${car2.modelo}` 
    }

    return `O ${car2.modelo} é mais veloz que o ${car1.modelo}`
}

console.log(compararVeloCarros(chevette, fusca));

// acima ele esta recebendo instancias da classe é importante sempre observar que a função so vai funcionar assim pq do contrario ela não
// vai conseguir acessar as propriedades da mesma ( isso não garante problema se voce garantir as entradas corretas mas tipar ( Typescript) ajuda a diminuir erros
// desse tipo no codigo)