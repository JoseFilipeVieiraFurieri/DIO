// Function


function sayMayName () {
    return 'Jurupita';
}

const referencia = sayMayName()

// passar func como parametro

function alias(sayMayName) {
    const apelido = sayMayName();
    console.log(`meu nome é ${apelido} mas conhecido como o beijoquero`);
}

alias(sayMayName);

// essa é caracteristica do JS, no JAVA vc teria ter um classe nova pra fazer a mesma coisa
// e possivel até retornar funçoes no JS


// Declarando Funçoes --------------------------------

// function declaration normal( declaração explicita)
 
function sayHelloToMyLittleFriend(x , y) {
    console.log('Olha aqui esse trabuco que derruba até o globocop!!!!');
}

//Arrow function

const arrow = () => {
    console.log('This is me');
}

// por referencia(function expression)

const   sayHello = function () {
    console.log('Eu sou dollynho o seu amiguinho');
}


sayHelloToMyLittleFriend();
sayHello();

// obs: a principal diferença dessas duas é que como o hoisting funciona nelas
// quando a função sozinha o hoisting sobe ela, ja quando ele esta na variavel ele so sobe a declaração da variavel e não a função atribuida

/*

class Teste {
    test1;
    test2;

    constructor(test1, test2) {
        this.test1 = test1;
        this.test2 = test2;
    }


    falar() {
        return 'Eu sou o patrão dos testes'
    }
}

console.log(typeof Teste);
const advTeste = new Teste('teste: millshake de ketchup', 'teste: polenta com açucar')
console.log(typeof advTeste);

*/


// Diferença da Arrow Function ------------------------------------------------------------------

function testFunc1() {
    console.log(this);
}

const testFunc2 = () => {
    console.log(this);
}


const bebeto = {
    nome: 'Bebeto',
    testFunc1,
    testFunc2
}

bebeto.testFunc1();

bebeto.testFunc2();

// arrow function não tem binding, elas não peguam o contexto de onde estão
// as duas funçoes foram colocadas dentro do bebeto e eram para falar log do this
// A teste1 imprimiu o contexto em que foi chamada ( dentro obj bebeto), mas a arraw não pq ela não faz binding( com isso perdi o this)
// o test2Func vem vazio no log
// Não usar o arrow em metodos !!!!!!! a não ser que ele não utilize o contexto !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




// Closure - lembrar do contexto de aonde foi chamada a função

function soma(x) {
    
    return function (y) {
        return x + y
    }
}

console.log(soma(10)(20)) // pq uma função tem como retorno outra função que recebe o y e retorna a soma


const somaParcial = soma(20)

console.log(somaParcial(20));
console.log(somaParcial(50));
console.log(somaParcial(60));

// Na somaParcial foi chamado a função de retorno e ela guardou o contexto de quando ele foi criada, 
// agora se for chamar pela variavel de somaparcial ele vai pedir o y e terminar a soma

// esse conceito é o closure ( tambem funciona com arrow)


// Invocar ----------------------------------------------------------------------------------------------
 function shoot() {
    console.log(' Vai ficar cheio de azeitona');
 }

// direta

shoot()
// invocando a função ou a referencia dela

// apply

 const pessoa = {
    nome: 'Filipe',
    idade: 34
 }

 function scream(prefixo) {
    console.log(`${prefixo}, ${this.nome}`);
 }


 scream.apply(pessoa, ['Ola'])

 // ** O apply aplicou o contexto do objeto  ao chamar a função func.apply(obj, [args])
 // Perceber que a função estava fora do contexto do objeto antes do apply


 // call - o cal é parecido mas a sinteses é deferente. scream.call(contexto, 'oi') - aqui não leva um array com os args


 // A ultima forma é o new que ja foi abordado em topicos anteriores


 // Callback -----------------------------------------------------------------------------------------------------------------------------
  function adicao(x, y) {
     return x + y;
   }

   function subtração(x, y) {
       return x - y;
   }

   function multiplicação(x , y) {
       return x * y;
   }

   function divisao(x , y) {
       return x / y;
   }

   function resto(x , y) {
       return x % y;
   }


   


  function calc(x, op, y) {
    console.log(op(x, y));
   }


 calc(10, subtração, 20);

 // Uma função foi passada como parametro pra outra/ a operação e dinamica. vc pode colocar de acordo com o operação a ser feita

 document.getElementById().addEventListener('click', () => {
    console.log('Clicou');
 })

 // os Listenes funcionam a base de callbacks

 