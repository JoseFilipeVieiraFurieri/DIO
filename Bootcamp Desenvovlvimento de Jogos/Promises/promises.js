// Promises


// Criando

new Promise((resolve, reject) => {
    // se der certo vai dar p resolve 
    // se der errado o reject
})

const random = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})

random.then((value) => console.log(value)).catch((error) => console.error(error)).finally(() => console.log('Finish'));

// esse é o esquema then ( then, catch e finally, mesmo esquema de interceptação de erros try/catch)

// Isso so foi ilustrativo, a função random não é uma função assincrona


const random2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)

    }, 1000)
})

random2.then((value) => console.log(value)).catch((error) => console.error(error)).finally(() => console.log('Finish'));

// setTimeout e pra simular o compartamento normal da promisse

// a promise permite o fluxo de codigo continue sem precisar esperar ela ser resolvida

// then e a condição o que vai ser feito, catch capture se houver algum e finally executa indepedente se houve sucesso ou não da promise

// da pra encadear varios then. apos o primeiro


// Exemplo arquivo csv

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// o path é uma biblioteca do JS pra criar atalhos( nessa caso não se justifica pq os arquivos estão todos na mesma pasta, mas coloquei como exemplo)

const tarefas = fs.promises.readFile(filePath)

// readfile -> ler arquivos

/*

tarefas
.then((arquivo) => arquivo.toString('utf8'))
.then((text) => text.split('\n').slice(1))
.then((lines) => lines.map((line) => {
   const [nome, feito] = line.split(';') // desustruração de array
   return {
    nome,
    feito: feito === 'true'
   }
}))
.then((taskList) => console.log(taskList))
.catch((error) => console.log(error))
.finally(() => 'Leu o arquivo com sucesso')

// toString -> converte o arquivo pra texto( o 'utf8' é o padrão do texto usado)

// isso tudo pra criar uma lista de objetos JS, eu vou tentar entender cada coisa depois, porque agora o mais importante e seguir em frente

*/


// async/await

async function  searchFile() {
    try{
        const promise = await fs.promises.readFile(filePath)
        const texto = promise.toString('utf8')
        console.log(texto);
        
    } catch(error) {
        console.log(error);
    } finally {
        console.log('Finalizou a request');
    }
  }


searchFile();


  // o metodo async/await é um açucar sintatico que tem o intuito de facilitar a escrita e leitura do metodo then
  // por baixo do pano o mecanismo é o mesmo do then
