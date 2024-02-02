let pokemon = ["bulbassaur", "Gengar", "Smoking"]

console.log(pokemon[0]);

let removido = pokemon.splice(0, 1)



console.log(removido);



const exemplo = "Meu score é : 42"

const splitText = exemplo.split(':'); // cria um array de substrings dividindo o a partir do :

const slipNumber = Number(splitText[1].trim());

// o trim serve para remover os espaços em branco, pq isso é importante? para quando voce  for mudar um 42 em string para number, não pode haver espaços em brancos pq senão
// ele volta um NaN

console.log(slipNumber);
console.log(typeof slipNumber);

let pokemonMatrix = [
    ["Raichu", "M", "Eletrico"],
    ["pinsir", "F", "Inseto"]
    ]


console.log(pokemonMatrix[1][2]);

// acho mais interresante usar objetos nesse caso

console.log(`O pokemon ${pokemonMatrix[1][0]} é do tipo ${pokemonMatrix[1][2]}`);

// caixinha roxa é metodo , azul é prop

console.log(2**8);

let counter = 1;

counter++; // counter = counter + 1

console.log(counter);

counter += 4; // ( counter = counter + 4)

let resultado = 2 * 5 + 5

// regras matematicas: multiplicação/divisão  tem prioridade sob soma e subtração. E sempre da esquerda pra direita.
// e possivel definir escopos pra burlar a pririoridades

let resultado2 = 2 * (5 + 5)

// ai primeiro ele vai somar antes de multiplicar


// operadores logicos

num = 10;
num2 = 12;

if ( num > 8 && num2 > 8) {
   console.log("É maior que 8");
}

// as duas tem que cumprir
// da pra colocar quantas vc quiser no if

if ( num > 8 || num2 > 11) {
    console.log("É maior que 8 ou 11");
 }

 // so uma precisa ser true

 // tem o operador de negacão !
   // o not inverte o operador logico em questão se o resultado de (num> 8) for positivo ele vira negativo, tambem serve pra checar casos false em condicionais


   let theVoid = null;

   console.log(typeof theVoid);

   // switch/case

   let fruit = "morango";

   switch(fruit) {

    case "jabuticaba":
        console.log("Licor de jabutica");
        break
    
    case "banana":
    case "morango":
        console.log(`Shake de proteina com ${fruit}`);
        break

    case "Cereal":
        console.log("Vodka");
        break

    default:
        console.log("salada de frutas");
   }

   // quando um condicional é verdadeira ele executa todas as condiçoes abaixo dele tb. Para evitar isso é usado o break
   // default estabelece um padrão para caso de nenhum case ser atendido
   // colocar um case embaixo do outro funciona como um if com duas condiçoes( ele vai cair no bloco abaixo tanto no caso de banana e tb morango)

   // switch case é ideal pra estruturas que tem muitas possibilidades

   // laços de repetição

   // for classico

   let vidaTotal = 0;
   
   for (let i=0; i <= 10; i++) {
     console.log(`Loop de numero ${i}`);
   }

   for (let i=0; i <= 10; i++) {
    vidaTotal += 1;
    console.log(`A vida total do personagem é de ${vidaTotal}`);
   }

   // while

   // outra maneira de estruturar laços de repetição
   let count = 0;

   while ( count <= 3) {
    console.log(`Contador esta no ${count}`);
    count++;
   } 

   // importante semopre definir um parada pra não entrar em loop infinito

   // Do while
   idCandidato = 1;
   do {
    console.log(`Seu numero de candidato é ${idCandidato}`);
    idCandidato++;
   } while (idCandidato <= 10)

   // o do while executata a primeira vez sem checar a condição, pq o do while sempre executa primeiro e depois checa


   // Function


function somar(num1, num2) {
       return num1 + num2
   }

console.log(somar(2, 4));

const division = ( num1, num2) => num1 / num2

console.log(division(5, 2));

// cada função deve cumprir um proposito especifico ( SOLID )
// quebrar funçoes -> se uma função esta fazendo multiplas responsabilidades, o ideal e quebrar ela em pequenas funçoes
// java tem sobrecarga
// sobrecarga e quando a duas vezes a mesma função em uma classe( com um mesmo nome) mas com atributos diferentes
// no JS não tem sobrecarga de metodo, ha alternativas mas não é a mesma coisa
// funçoes so podem retornar um valor por vez


function getFirstName(name) {
    let nameSplit = name.split(" ") // ela recebe como parametro o aonde ira quebrar e nesse caso o caracter e no espaço em branco entre os caracteres. Se vc uma data poderia ser split("-")
    console.log(nameSplit);
    return `O seu primeiro nome é ${nameSplit[0]}`
}

console.log(getFirstName("José Filipe Vieira Furieri"));

// split tb tem no java