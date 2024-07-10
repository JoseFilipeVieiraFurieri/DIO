# Array e estruturas de repetição



# Arrays

  - são agrupamento de valores, que geralmente servem pra ordenar coleçoes de valores que tem uma logica entre si
  - tambem são chamadas de listas ( no python listas e array são estruturas diferentes)
  - sintaxe :
    
    const frutas = [ 'banana', 'maça', 'pera']

  - Cada elemento do array e acessado por meio do indice, que sempre começa do zero [ 0 , 1 , 2]

  - Para acessar o elemento se usa a conotação frutas[i], com o i sendo o indice especifico do elemento

  - E possivel colocar dentro do array diferentes tipos primitivos, podendo colocar array dentro de array e fazer uma lista de objetos por exemplo

# Estruturas de repetição
  
  - Os famosos loops
  - existim varias tipos
  - Servem para iterar sobre arrays

  - For classico
    for (let i = 0; i < numberList.length; i++) {
    
    if ( numberList[i] % 2 === 0) {
        evenNumber.push(numberList[i])
    }
    
  }

    - o for classico possui o ( inicializador; condição de parada; incremento)
      inicializador -> aonde na lista o loop começa
      condição -> quando a lista vai parar, no for classico ele não para no final da lista, vai dar erro se não colocar a condição quando não
                  tiver mais o que iterar
      incremento -> a cada loop quanto o loop sera incrementado


# Depuração ( ou debug)
  - O depurador é integrado com o vscode
  - as bolinhas vermelhas são os breakpoints( indica de qual parte do codigo vc quer iniciar a depuração)
  - a setinha amarela transparente indica que esta esta o depurador( indica a linha e a coluna)
  - O primeira seção(variables) são todas as variaveis que estão no codigo
  - A segunda e a seção de watch onde vc indica as variaveis e estruturas que voce quer observar
  - f10 avança linha a linha
  - a tambem a pilha de chamadas - mais avançado mas creio que deve ser pra chamadas de api/callbacks
  - quando vc quer que ele entre dentro de uma função e monitorar um loço de repetição especifico vc tem que especificar com o breakpoint
    - acho que tem um jeito no console de colocar pra ele entrar nas funçoes e laços dentro do escopo da função mas tenho que praticar mais