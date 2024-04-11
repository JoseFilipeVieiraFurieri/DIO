// Resumo JS

// Novamente so conceitos para relembrar

// Livescript -> Javascript ( o nome ecmascript é o nome registrado mas o js que ficou famoso)

// Linguagem alto nivel, fracamente tipada, interpretada

let nome = "Filipe"

console.log(nome);

console.log(2 + 2); 

console.log(4 - 2);

console.log(4 / 2);

console.log(6 * 3);

console.log(6 ** 2);

console.log(10 % 3);


// condicional 

const idade = 18;

if (idade > 18) {
    console.log("maior de idade");
}

switch (idade) {
    case 18:
        console.log("maior de idade, rapa");
        break

    case 20:
        console.log("menor de idade");
        break

}

// o switch so avalia valores simples, ele não funciona com expressoes( tipo idade > 18)

const ageCheck = (idade > 18 ? "maior de idade xara" : "piralho") // ternario

console.log(ageCheck);

// operadores logicos ( && , ||)

// operadores de comparação ( > , < =>, <=, ==(valor), ===(valor e tipo), =!)


// Tipos de variaveis

// let, var , const ( conceito de hoisting tem no mais detalhado no curso de desenvolvimento de jogos DIO)

// string, number, boolean, null, undefined, object

// lembrando que o hoisting sobe o declaração da variavel não o valor

// var tambem foge do escopo de função

// Laços de Repetição( ou loops)

// classico

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}

// while

let control = 2;

while (control < 10) {
    console.log(control);
    control++
}

let control2 = 4

do {
    console.log(control2);
    control2++
    
} while (control2 < 10);

// o while checa antes de entrar no bloco, o do while entra no bloco e depois checa


// o forEach e o map são mais maneiras de iterar sobre arrays, existe alem disso o for in e for each tb so que esses servem pra trabalhar
// com objetos( ou prototipos como queira chamar)


const numberList = [ 2, 3 , 5];

numberList.forEach(number => console.log(number * 2));

const numberList2 = [ 3, 6 , 8];

const mapNumber = numberList2.map(number => number / 2)

console.log(mapNumber);

// lembrar que o forEach itera sobre os elementos so que não retorna nada, ja o map retorna uma lista nova( ele não modifica a lista
// original ele retorna uma nova, importante lembrar disso)

// Functions

function soma(a , b) {
    return a + b;
};

console.log(soma(10, 5));

// arrow function

const sub = ( a , b) => {
    return a - b
}

console.log(sub(10 , 5));

// arrow function são chamadas de funçoes anonimas porque em si a função não tem nome, o sub é uma const, não a função em si, ela na ver
// dade armazena o retorna da função anonima dentro dela. existe algumas diferenças de escopos( principalmente em relação a binding e
// e o this( contexto) de diferenças das funçoes normais e das arrows eu coloquei isso em mais detalhes dentro do conteudo do curso de 
// desenvolvimento de jogos)

// recursividade

// so fiz para lembrar de função recursiva( chama a si mesma). Nesse caso sempre colocar um break para evitar loops infinitosh

function rec(a) {

   if (a >= 10) {
    return console.log("end");
   }

    console.log(a);
    return rec(a + 1)
    
}

rec(1);

// Array e objetos

const nameList = [ "Jabuti", "Persa", "gorila"]

const capsName = nameList.map((a) => a.toUpperCase());

console.log(capsName);

const studentList = [
    {
        name: "Joaquim Barbosa", classe: "A-1"
    },
    {
        name: "Penelope Lopes", classe: "A-3"
    },
    {
        name: "Etevaldo Gomes", classe: "B-2"
    }
]

// estruturas chave valor

console.log(studentList[0].name);

for (const name of studentList) {
    console.log(name.name);
}

// for of acessa os valores

for (const key in studentList) {
    console.log(key);
}

// for in acessa as posiçoes( o indice)

// as duas são maneiras de trabalhar com objetos

// deconstructing

const [ student, ...rest] = studentList

console.log(student);

console.log(rest[1]);

// o esquema de desostruração ali e so seguinte o student armazena o primeiro objeto e o rest os demais. Eu compliquei um
// pouco mais o exemplo do que eu queria( na verdade eu fiz uma desustruração do array, mas da para fazer em objetos, em multiplas
// camadas, etc)

// não vou especificar aqui metodos de array(push, unshift, etc) pq ja tem uma seção disso


// Exemplos de Funcionalidades do ES6(ecmascript 6)

const studentList2 = [
    {
        name: "Joaquim Barbosa", classe: "A-1"
    },
    {
        name: "Penelope Lopes", classe: "A-3"
    },
    {
        name: "Etevaldo Gomes", classe: "B-2"
    },
    {
        name: "Manu Moreira", classe: "A-1"
    },
]

const filterStudend = studentList2.filter(( student) => student.classe === "A-1")

console.log(filterStudend);

console.table(filterStudend);

// o console.table e outra forma de mostrar os dados. Coloquei pq eu so uso o log, então e bom saber de outros

// o filter retorna um array com os estudantes que atenderem o criterio ( classe A-1). O filter retorna um array novo com todos que 
// estiverem dentro das espeficaçoes

const findStudent = studentList2.find((student) => student.classe === "A-1")

console.log(findStudent);

// o find so retorna o primeiro item que atende a condição

const indexStudent = studentList2.findIndex((student) => student.classe === "B-2")

console.log(indexStudent);

// o findIndex retorna so o index( posição ) do item que atender a condição


const reduceList = [ 2 , 4 , 5 , 8];

const somaReduce = reduceList.reduce((acc , curr) => acc + curr, 0)

console.log(somaReduce);

// o reduce recebe dois parametros o acumulador (acc) e o valor atual( current), os acc e curr são valores padrão mais vc pode colocar
// o que fizer mais sentido pra vc. O 0 especifica com qual valor o curr vai começar. No final ele retorna um valor final ( no caso acima
// a soma)

const familyList = [ {
 nome: "Franz",
 sobrenome: "Ferdinand"
},
{
 nome: "Gumercindo",
 sobrenome: "Gomes"
}]

const someTest = familyList.some((el) => el.sobrenome === "Ferdinand")

console.log(someTest);

//o some retorna um booleano no caso de haver algum elemento que atenda a condição ( no caso true)

const everyTest = familyList.every((el) => el.sobrenome === "Ferdinand")

console.log(everyTest);

// O every retorna true no caso de todos os elementos do array atenderem ao criterio

// outra coisa e que nos exemplos eu não coloquei return pq eu optei pelo retorno implicito, mas para isso a HOF tem que estar da mesma
// linha do contrario tem que abrir o {} e colocar return
