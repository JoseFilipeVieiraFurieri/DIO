//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Solicita ao usuário o tipo de magia
const tipoMagia = 'ataque';

// Solicita ao usuário a quantidade de vezes que a magia será usada
const quantidade = 3;

// Obtem a mensagem correspondente ao tipo de magia
// const mensagem = obterMensagem(tipoMagia);


//TODO: Crie uma função ou outra estrutura condicional para retornar a mensagem correspondente ao tipo de magia:
function castMagic(magicType, castTimes){

// Criamos um objeto 'mensagens' para mapear os tipos de magia para mensagens correspondentes.
  const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };

// Aqui fica o retorno da função com a mensagem associada ao tipo de magia fornecido:
    for (let i = 0; i < castTimes;i++) {
      mensagens[magicType];
    }
    
}
// É impresso a mensagem a quantidade de vezes especificada:


console.log(castMagic('cura', 3));


const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };

  const valoresMensagens = Object.values(mensagens)

  console.log(valoresMensagens);


  //

  function castMagic(magicType, castTimes){

    // Criamos um objeto 'mensagens' para mapear os tipos de magia para mensagens correspondentes.
      const mensagens = {
        ataque: "Usou magia de ataque!",
        cura: "Usou magia de cura!",
        defesa: "Usou magia de defesa!",
        invalido: "Tipo de magia inválido!"
      };
    // Aqui fica o retorno da função com a mensagem associada ao tipo de magia fornecido:
      return mensagens[magicType] || mensagens.invalido;
    }
    // É impresso a mensagem a quantidade de vezes especificada:
    for (let i = 0; i < quantidade; i++) {
    console.log(castMagic(tipoMagia, quantidade));
    }


    //Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Solicita ao usuário o tipo de magia
const tipoMagia2 = 'defesa';

// Solicita ao usuário a quantidade de vezes que a magia será usada
const quantidade2 = 2;


// Obtem a mensagem correspondente ao tipo de magia
const mensagem = obterMensagem(tipoMagia2);


//TODO: Crie uma função ou outra estrutura condicional para retornar a mensagem correspondente ao tipo de magia:
function   obterMensagem(tipoMagia) {

// Criamos um objeto 'mensagens' para mapear os tipos de magia para mensagens correspondentes.
  const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };
// Aqui fica o retorno da função com a mensagem associada ao tipo de magia fornecido:
  return mensagens[tipoMagia] || mensagens.invalido;
}
// É impresso a mensagem a quantidade de vezes especificada:
for (let i = 0; i < quantidade2; i++) {
console.log(obterMensagem(tipoMagia2))
}


// Funcionou

// eu simplesmente não fiz nada so nomeei a função obterMensagen e foi kkkkkk


/*
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Solicita ao usuário o tipo de magia
const tipoMagia = gets();

// Solicita ao usuário a quantidade de vezes que a magia será usada
const quantidade = parseInt(gets());

// Obtem a mensagem correspondente ao tipo de magia
const mensagem = obterMensagem(tipoMagia);


//TODO: Crie uma função ou outra estrutura condicional para retornar a mensagem correspondente ao tipo de magia:
function  obterMensagem() {

// Criamos um objeto 'mensagens' para mapear os tipos de magia para mensagens correspondentes.
  const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };
// Aqui fica o retorno da função com a mensagem associada ao tipo de magia fornecido:
  return mensagens[tipoMagia] || mensagens.invalido;
}
// É impresso a mensagem a quantidade de vezes especificada:
for (let i = 0; i < quantidade; i++) {
print(mensagem);
}

*/

