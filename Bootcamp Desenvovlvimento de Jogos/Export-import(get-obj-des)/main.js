const func = require('./export-import');


console.log(func.gets());
func.print('Eu sou o Tarzan');

// func é um objeto que contem as funçoes gets e print, feitas no arquivo export-import.js

// vc pode usar a . para acessar as funçoes

// ou 

// usar o desconstrução de objetos

const { gets, print} = func

// a sinte é essa acima do lado esquerdo usa {} e do esquerdo o objeto a ser descontruido. Isso serve pra facilitar o acesso dos valores ou funçoes
// que estão dentro do objeto

console.log(gets());
print('Eu sou mafalda');

// ciclo de vida - o arquivo de export declara as funçoes do objeto e armazena em um objeto
// depois esse arquivo e usado onde tem o require
