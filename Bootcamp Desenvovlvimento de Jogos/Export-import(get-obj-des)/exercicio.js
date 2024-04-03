const { gets, print } = require('./export-import');

const maiorNumero = gets([5, 50, 10, 98, 23]);

print(maiorNumero);

// no numero sorteado ele fez um treco de mock no arquivo  que importa o gets, eu preferi transformar a função gets pra uma função que ja retorna o maior numero
// os numeros sorteados não tem a ver com o uso do random. 

// a função gets e print são funçoes que tem la na plataforma da dio. eu tentei seguir, mas para mim não fez muito sentido. Mas o exercicio cumpriu o objetivo