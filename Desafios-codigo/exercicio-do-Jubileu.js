// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = gets();

// TODO: Implemente uma solução utilizando lógica de programação;
function runOrFight(nomePersonagem, acaoEscolhida) {
  if (acaoEscolhida === 'Fugir') {
    return `${nomePersonagem} escolheu Fugir!`
  } else if (acaoEscolhida === 'Atacar') {
    return `${nomePersonagem} escolheu Atacar!`
  }
  
  return 'Tente novamente'
}

print(runOrFight(nomePersonagem,acaoEscolhida));