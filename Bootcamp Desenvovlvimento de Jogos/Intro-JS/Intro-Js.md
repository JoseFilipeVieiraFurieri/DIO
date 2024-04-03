## Introdução ao JS

# Variaveis

- let, const e var
  usar o let pra variaveis e const para constantes

  - o let é recomendado pq o var tem o que chama de Hoisting, o que acontece e que na execução o var meio que sobe a declaração do var e sendo assim permite
    vc usar a variavel antes dela ser declarada ( o codigo e lido de cima pra baixo), o problema disso e que o vc pode declarar variaveis em qualquer ponto do codigo e isso pode dar uma series de problemas mas isso acaba diminuindo muito a legibilidade do codigo e a manutenção

  -const não deixa voce mudar o valor atribuida a ela posteriormente

# Operadores matematicos
  
  - + , -, * , / , %( resto de divisão)

# Tipos primitivos
  - string
  - int
  - float
  - boolean ( true e false)
  - none

# Operadores de comparação 

  - == -> ignora o tipo
  - === -> compara o tipo e o valor
  - > , < , => , =< 

# Operadores logicos
 - &(and), || (or)


# Estruturas Condicionais

  - if e else
  - sintaxe:
     if (cond) {
        executa o bloco
     } else if () {

     } else {

     }

  - else if se a primeira condição não for cumprida
  - else no final
  - obs: sinal de negação(!)
  - Voce pode armazenar o valor das comparaçoes em variaveis e testar ela (  a sintese indica e const isNumberEven = number % 2 ===0), mas em funçoes nem    precisa porque ela ja retorna o true e false quando a pessoa chama a função( vc pode no entanto armazanar o retorno da função em uma variavel se quiser)
    obs: pelo principal de encapsulamento uma função ou metodo não precisa explicitar o seu mecanismo de função para quem usa( isso no POO logico), então geralmente isso não é necessario