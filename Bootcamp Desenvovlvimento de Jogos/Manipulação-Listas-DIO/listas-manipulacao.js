// Manipuladores de lista


// HOFS


// # ForEach -----------------------------------------------------------------------------------


const lista = [4, 5 , 8 , 9 , 10 , 12 , 14, 13, 32, 45, 22, 33]


/*
lista.forEach((value, i , listREf) => {
   console.log(value, i , listREf);
})

*/

// a callback fo ForEach recebe um callback que aceita ( valor do numero no loop atual, indice e referencia da lista a ser percorrida)

// ou

lista.forEach((value, i , listREf) => {
    if (value % 2 === 0) {
        console.log('O numero é par');
    }

    console.log('Impar');
})

// o forEach é um pouco mais lerdo que o for normal


// Filter -----------------------------------------------------------------------------------------------

 const lista2 = [4, 5 , 8 , 9 , 10 , 12 , 14, 13, 32, 45, 22, 33]

 const filtro = lista2.filter((ele) => {
    if (ele > 20) {
        return ele
    }
 })

 console.log(filtro);

 // o filter passa pela lista toda e com base nas instruçoes fornecidas ele retorna os elementos que passaram neles em um nova lista


 const filtro2 = lista2.filter((ele) => {
    return (ele % 2 === 0)
 })

 console.log(filtro2);

 // voce nem precisa de colocar o if , porque o filter opera ja por meio de true e false, ou seja, ele ve se o atribuito cumpriu a condição(true) e se não,
 // ele da false e descarta o mesmo
 // o filter retorna uma lista nova ( o filter não altera a lista original)



 // Map --------------------------------------------------------
 class Pessoa {
    nome; 
    sobrenome;
    idade;
    cpf;

    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome; 
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }


    falar() {
       console.log(`Meu nome é ${this.nome}`);
    }

 }


 const listaPeople = [
    new Pessoa('José Filipe', 'Vieira Furieri', 34, 23478999900), 
    new Pessoa('Zilma', 'Vieira Furieri', 62, 333333333),
    new Pessoa('José Antonio', 'Furieri', 64, 222222222),
    new Pessoa('Vinicius', 'Vieira Furieri', 32, 23423423434),  
    new Pessoa('Poloma', 'Pereira dos santos', 34, 54678999),
    new Pessoa('Etevaldo', 'Silva Sauro', 43, 12312312333),  
    new Pessoa('Mastrangelo', 'Keitson', 27, 2323232345)                          
]

listaNome = [];

listaPeople.forEach((el) => {
    listaNome.push(el.nome)
})

console.log(listaNome);

// o map faz isso mais facil

const listaSobrenome = listaPeople.map((el) => el.sobrenome) // retorno implicito

const listaHtml = listaPeople.map((el) => `<li>${el.nome}<li>`).join(' ')


console.log(listaSobrenome);
console.log(listaHtml);

// o map age sobre uma lista e retorna a lista modificada, no caso eu so peguei o sobrenome da lista de objetos listPeople
// map é um metodo imutavel( não altera a lista original)

// Map é um dos mais usados, falo por experiencia propria


// Reduce ------------------------------------------------------------------------------------------------------------------------

const listaSoma = [ 2, 4 ,6, 8 , 10 , 12]


const mapSoma = listaSoma.reduce((acc, curr) => {
    console.log(acc, curr);
    return acc + curr
}, 0)


// acc é o accumulador 
//curr o numero atual do loop
// o zero ali e pra ele começar com o acumulador zerado, mas pode ser passado qualquer valor

console.log(mapSoma);

// JOIN -----------------------------------------------------

const nomeSeparado = [ 'José', 'Filipe', 'Vieira', 'Furieri']


const listaJoin = nomeSeparado.join(' ')

// o join leva um parametro que e como serão separados os elementos
// por default ele separa por virgula
// se vc quer separar de maneira mais organizar e so colocar ' ' ( caracter em branco)

console.log(listaJoin);

// vc pode encadear as HOFS

const listaIniciais = nomeSeparado.map((el, i) => el[0]).join('')

console.log(listaIniciais);

// No exemplo acima eu usei o map pra pegar a primeira letra de cada el e depois usei o join pra juntar tudo sem espaços
// Da pra ir encadeando as HOFS de acordo com sua necessidade


const listaCaps = nomeSeparado.filter((el) => el.length > 4).join(' ')

console.log(listaCaps.toUpperCase());

// .startWiths('a') so pq ele citou, mas esse metodo é util