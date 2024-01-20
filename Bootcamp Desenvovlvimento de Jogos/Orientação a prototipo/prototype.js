// Orientação a prototipos

const pessoa = {
  sobrenome: 'Silva Sauro'
}

const renan = {
   nome : 'renan',
   idade: 30,
   __proto__: pessoa
}

console.log(renan.sobrenome);

// não achou no renan foi no na pessoa

// funcão construtura

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // func const são indentificadas pelo primeira letra maiuscula
  // func construtoras ganham a referencia do this
  // elas agem como o construtor de classe

const filipe = new Pessoa('filipe', 34)

console.log(filipe.nome);
console.log(typeof filipe);

  // importante notar que o tipo muda pra objeto ( porque é um objeto literal)
  // o JS não trabalha igual com classes ao JAVA ele trabalha com prototipos

Pessoa.prototype.falar = function say() {
    console.log(`Meu nome é ${this.nome}`);
}

filipe.falar();

// repare que eu coloquei a função no prototipo e o filipe ja adquiriu a caracteristica


// Agora de fato a sintese de classe

class Pessoa {
    nome;
    idade;


    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    speak() {
       console.log('You make me dissapear')    
    }
}

// A sintese e a mesma do prototype, quando a classe e transpilada, os construtores são transformados em funçoes construtoras e os metodos são atribuidos
// ao prototype

// a sintese de classe é usada no dia a dia


// SOBRESCRITA

const carro = {
    cor: 'vermelho'
}

const chevete = {
    marca: 'chevete',
    cor: 'azul',
    kmHora: 45,
    __proto__: carro
}

console.log(chevete.cor);

// ele procura no chevette e ja retorna e se não volta o vermelho. Isso é  sobrescrita. Ele sempre procura na mais proxima da cadeia de prototipos

// O chevete sobrescreve o atb cor do prototipo(carro)

// No JAVA voce pode ter o mesmo metodo com valores diferentes, no JS não e possivel ( por causa da estrutura chave e valor)


// criando Objetos

 // Literal
   
const fusca = {
    marca: 'Fusca batido',
    cor: 'azul',
    kmHora: 45,
    __proto__: carro
}

   console.log(fusca.marca);

 // Object create

 const camaroAmarelo = Object.create(carro);

 console.log(camaroAmarelo.cor) // desse jeito vc tem que adicionar depois os outros atbs

 camaroAmarelo.marca = 'Camaro'

 console.log(camaroAmarelo.marca);

 // desse jeito vc acessa o prototype com carro.__proto__

 // com funcoes construtoras carro.prototype

 // Todos os objetos JS tem esse prototype

 // -------------------------- New

 function  Deck(numeroCartas, nomeJogo) {
    this.nomeJogo = nomeJogo;
    this.numeroCartas = numeroCartas;
 }

 console.log(new Deck(42, 'Truco'));

 // quando new é chamado ele invoca função construtora que associa os atbs ao novo objeto e faz um bind( coloca tipo o __proto__ uma referencia) nele
 // o log mostra que o objeto criado e do tipo Deck e tem os determinados valores

 Deck.prototype.frase = function () {
    console.log('Vai um carteado');
 }

 const YuGiOh = new Deck(678, 'Yu-gi-Oh')

 // Call ( o call não passa o prototype) ----------------------------------------------------------------------------------

 const truco = {}

 Deck.call(truco, 45, 'Truco')

 console.log(truco);

 // o call é uma forma de atribuir contexto a um objeto vazio , ali usamos o proto Deck que tem o call e passamos o truco e ele adquire o contexto dele (os atb
 // e metodos) e possivel passar os valores depois do objeto Deck.call(obj, atb1, atb2)

 // o objeto não precisa ser vazio pode conter ja chave: valor ele so adiciona ao contexto do truco os atb do DECK


 // Tudo no JS é objeto

 /*

 String.prototype.toRebolado = function () {
    console.log('No rebolation');
 }

 String.prototype.toRebolado();

 */

 // Bem bacana o String é um objeto e voce até consegue colocar dentro dele metodos novos
    // obvio que so no contexto do projeto né, não e recomendado fazer isso, colocar novas funçoes no objetos bases ( ele chama de enriquecer).
    //So coloquei para curiosidade, mas com o prototype voce até consegue ver todos os metodos disponiveis para strings



// E BOM SABER COMO FUNCIONA, MAS NÃO È PRA FICAR ENCUCADO, PORQUE O QUE É USADO E A SINTESE DE CLASSE


