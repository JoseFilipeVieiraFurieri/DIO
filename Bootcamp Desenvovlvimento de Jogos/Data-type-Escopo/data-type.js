teste();

function teste() {
    console.log('Oi teste, oi teste');
}

// funçoes tb tem hoisting

/*
var var1;


console.log(var1);

var var1 = 'fulano';

*/

// Sem hoisting declarando na ordem correta

/*

function teste2() {
    console.log('Teste2');
}

const teste3 = function() {
    console.log('Teste3');
}

teste2();
teste3();

*/

// com o hoisting


teste2();
teste3();


function teste2() {
    console.log('Teste2');
}

var teste3 = function() {
    console.log('Teste3');
}


// o teste 2 ocorre o hoisting normalmente, ja no 3 ele é afetado pelo hoisting um pouco deferente o hoisting levantou a declaração e não a atribuição da fun-
// a variavel, ai quando a chamada da função e feita da erro que o teste3() não e função porque no momento ele é indefinido no momento da chamada

if (true) {
    var var1 = 10;
}

console.log(var1);

// Com o uso do var as variaveis que são declaradas dentro do escopo(exceto de função) da função vazam e 
// podem ser acessada pelo lado de fora(exemplo acima)
// lembrando que hoisting iça a declaração, no log da pra ver o valor pq o mesmo foi colocado apos o bloco if


function teste4(params) {
    var var2 = 10;
}

teste4();

console.log(var2);

// O var no entento não consegue vazar de escopo de funçoes. Acima se percebe que o log nem consegue achar a declaração do var2 dentro da function

// tipos primitivos e exemplos do dinamismo na tipagem do JS

let text = 'oi'

console.log(typeof text); // string

text = 10;

console.log(typeof text); // number

// o tipo muda dinamicanmente. Linguagens fortemente tipadas não permitem isso

let soma = 10 + '10' // tipo string e number, ele transforma o number em texto

let soma2 = 10 - '10' // como o - não tem equivalente ( o + pode ser para concatenar ou somar) ele entende que e uma operação matematica

// esa coerção forçada e chamada de coerção de tipo

// no caso de não conseguir coverter -> NaN (not a number) -> soma = '10' - '10'
console.log(soma);

// == -> despreza o tipo
// === -> compara o tipo e o valor


// Null e Undefined

let x = null;
let y;

console.log(typeof x);
console.log(typeof y);
console.log(x);

// que curisoso a primeira e null mas ele fala que é um objeto
// obs: isso é uma questão de implementação, no começo do JS null foi colocado como objeto, no entanto ele é considerado um tipo primitivo
// em termos tecnicos( é bom lembrar)
// a segunda e uma variavel declarada é não atribuida
// obs: para retornar null vc so imprimi a variavel que tem o null( o x) ai ele retorna null
// a 3 e uma não declarada, se colocar o typeof vc vera que a ultima tambem é undefined

// um exemplo bacana disso

const h = {
    nome: null
}

const i = {
    nome: undefined
}

console.log(JSON.stringify(h));
console.log(JSON.stringify(i));

// no null ele retorna um objeto com o valor null, ja no undefinid ele retorna um objeto vazio
// O JSON serve pra transforma o objeto em um formato pra trafego na net, e acima é o metodo de stringfy(objeto -> string JSON)


// Symbol

const xy = Symbol('10');
const yx = Symbol('10');
console.log(xy == yx);

// O simbolo cria um objeto imutavel é unico
// Apesar de xy serem do mesmo valor e tipo eles irão dar false na comparação
// Podem ser usados para garantir que id serem unicos( existem outras maneiras no entanto)


// OBJETOS


const tiririca = {
    nome: 'tiririca',
    idade: 30,
    musica: function() {
        console.log(`Florentina, Florentina de Jesus. Não sei se tu me ama mas o ${this.nome} me seduz`);
    }
}

tiririca.sobrenome = 'Silva Sauro' // aqui cria se a chave não existir

console.log(tiririca);

// acessando

console.log(tiririca.nome);
console.log(tiririca['nome']);
tiririca.musica();

// metodos são as funçoes dentro de objetos
// as variaveis são atributos
// this dentro do contexto do objeto se refere ao obj ( exemplo acima)

// e possivel pegar os metodos do objeto e armazenar em variaveis

const palhaco = tiririca.musica();

// No entanto ela perde o contexto ( o this não faz mais referencia ao objeto e o ${name} vai ser undefined)
// arraw functions não tem contexto, importante isso!!!!!!!!

