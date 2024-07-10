// export / import

function gets(alunos) {
  
  let maiorNumero = 0;

  
  for (let index = 0; index < alunos.length; index++) {
    if ( alunos[index] > maiorNumero) {
        maiorNumero = alunos[index];
    }
    
  }


  return maiorNumero;
}

const print = (texto) => {
    console.log(texto);
}

module.exports = {gets, print};

