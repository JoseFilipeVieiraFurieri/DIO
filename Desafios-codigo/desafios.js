const totalSalas = parseInt(3);
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if (temTesouro && !temMonstro) {
        console.log("Tesouro na sala " + sala + "!");
    } else if (temMonstro && !temTesouro) {
        console.log("Monstro na sala " + sala + "!");
    }
}

// desafio Minerais

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).
const quantidadeGolpes = parseInt(4);

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i - 1) % minerais.length
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  console.log(i + ": " + minerais[minaIndex]);
}

// primeiro eu tive que fazer duas coisas nesse exercicio eu tive que alterar o minaIndex pq ele sempre esta retornando os valores 0,1,2,0 ou seja ele
// estava imprimino duas vezes carvão ( o todo não menciona isso) coloquei então um menos 1 no mina index, ai ele começava do indice zero( 0 % 4)
console.log(0 % 4);
console.log(1 % 4);
console.log(2 % 4);
console.log(3 % 4);

// como pode ver essa é uma maneira de relacionar o indice, quando voce quer relacionar um indice com um array avulso( i % arrayEx.length) isso evita que o indice
// que representa no exercicio o numero de picaretas ultrapasse o numero do array original

// eu acabei fazendo desse jeito pq acabou que não posso alterar nada a não ser a parte do todo senão da erro

const quantidadeGolpes2 = parseInt(gets());

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais2 = ["Carvao", "Ferro", "Diamante", "Pedra"]

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = i % minerais.length;
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  print(i + ": " + minerais[i - 1]);
}

let minerais3 = ["Pedra", "Carvão", "Ferro", "Diamante"];

// correção na verdade era pra fazer do jeito que eles colocaram

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).

/*

const quantidadeGolpes = parseInt(gets());

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Pedra", "Carvao", "Ferro", "Diamante"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = i % minerais.length;
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  print(i + ": " + minerais[minaIndex]);
}

*/

// COm foi meu erro ? eu segui a ordem do array que eles colocaram esse foi o erro, o negocio deles não começa do primeiro elemento e sim do 1 então acaba
// imprimindo errado, isso pode ser corrigido com o alterando o codigo, mas a unica coisa que voce pode alterar e a ordem do array, então eu abservei a ordem 
// de output deles e ajeitei de acordo. meio esquisito e nas coxas esse aqui mas vou deixar de exemplo de qualquer jeito