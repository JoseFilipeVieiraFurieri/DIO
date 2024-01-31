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
