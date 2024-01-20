## Variaveis, escopo e tipos de dados

# Variaveis

 - Javascript é fracamente tipado( a tipagem é dinamica)
  - se voce tentar soma um numero com texto, ele automaticamente converte o numero e concatena as variaveis
  - No caso do - em 10 e '10, ele entende que o menos é um operador matematico e faz a subtração sem problemas
 - Case sensitive
 - # var
   - var tem hoisting ( ja expliquei mas é o içamento das variaveis)
   - o hoisting tambem ocorre o hoisting
   - O hoisting do var não iça a atribuição de valor mas sim a declaração das variaveis( sem valor). Importante porque eu pensava que subia tudo(valor e variavel)
   - O principal efeito disso no var e que ele vaza escopo de bloco por causa do hoisting;
     - O var no entanto não consegue vazar de escopo de funçoes. Acima se percebe que o log nem consegue achar a declaração do var2 dentro da function
 - # let
   - o let e uma variavel que pode ser reatribuida e a principal diferença e que ela não sofre os efeitos do hoisting. Ou seja ela sempre se mantem no escopo em qual foi declarada
 - # const
   - O nome delas sugerem tudo, elas não podem ser atribuidas. O ideal é usar const em valores que irão se manter e o let quando se quer alterar ( tipo em um
     escopo de loop)

- # Nomenclaturas
    - camel-case
    - let _teste = 11, desse jeito  quer dizer que voce quer que a variavel permanece dentro do seu escopo
    - classes devem começar com maiusculo
    - const devem estar maiuscula tudo const DEVE = ''

# Tipos de Dados

  - Durante a execução do script os tipos são definidos( dinamicos - fracamente tipada)
    Quando e fortemente tipada vc precisa declarar o tipo string var1 = 'tipo'
    Se tentar reatribuir com outro tipo que não for string vai dar erro

  - tipos primitivos e tipo object

    - Tipos primitivos são imutaveis
      o Objeto não ( isso em endereçamento de memoria)
      - Nos tipos primitivos e alterado a referencia
        let x = 10;
        x = 20;
      - no ex acima o que acontece e que a referencia o ponteiro da var x muda do 10 pra 20 mas ele não altera em si o x
      - Nos objeto ( x.var1 = 20) e alterado o endereço mesmo porque eles não são imutaveis
      - objetos tambem carregam metodos ( tem mais diferenças)

  -quais são os primitivos?
   
   # string -> 'a'
    - podem ser representadas como '', "" e `` ( string literals - para usar ${})
     - o '' e o "", para fazer '""', pois aspas não funcionam dessa maneira vc pode colocar \"teste\"
     - geralmente usa a aspas simples para representar o html e as duplas pra id=""
     - o strings literals são usados pra facilitar a concatenação
       em uma map por exemplo <div id=`${}`> assim fica dinamica  e mais facil de ler
       nele vc consegue colocar "" se houver necessidade tipo `<div id="${10}"><div>`

    - conjunto de caracteres -> texto
   # bollean -> true, false
     - conversão pra boleano
       if(nome) {
        console.log('')
       }

     - vazio('') e false
     - se !nome e passar vazio ele converte pra true
       obs: if (nome é pode ser usado para validação de dados - if( nome) pode ser entendido como if (nome === true))
     - O sinal de !nega o valor, true vira false e vice versa
     - Ou seja se if (!name) quer dizer se o name for false( se a pessoa colocou '' ou não preencheu ) pode ser usado pra dar um alerta ao user
       obs: espaço e considerado um caracter
     - new wrapper Bollean(true) -> não muito usado
     - condicionais retornam bollean
     - 0 pode ser entendido como false ( binario)
   # undefined -> let var1;
     - undifined pode ser quando vc usa variavel não declarada ou uma variavel sem atribuição de valor
   # number -> 1, 2, 3
     - positivos, negativos e NaN ( o not a number tb é do tipo number)
     - float ta dentro do number ( não é um tipo especifico no JS, diferente do python)
     - O JS usa o sistema chamado double precision 64bit binary format
       isso pode gerar erros de precisão -> um exemplo é const 0.1 - 0.3 = -0.1999999999999998
       !!! isso e importante pq se voce precisar de operaçoes mais precisas( transaçoes monetarias, etc)
       vc vai ter que recorrer a outro tipo ( tem um site que explica isso https:0.300000000000004.com, sim é esse o nome)
       obs: no JS tem um biblioteca chamada decimal.js 
       isso não e exclusivo de JS, tem em JAVA, C# é mais uma porrada
   # null
     - nulo quer dizer que a variavel não tem um valor nela ( x = null) o que é dirente de undefined
   # Symbol
     - é um objeto imutavel unico(normalmente eles são mutaveis)
     - const x = Symbol('10') - é uma função

  - cada tipo primitivo tem um wrapper
    new bolean() -> a diferença e que ele cria um objeto e não um tp



# Objetos

  - objetos são coleçoes dinamicas de chave e valor
  - const x = {
      chave: valor,
      chave:valor
  }

  
