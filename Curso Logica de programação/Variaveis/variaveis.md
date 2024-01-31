Variaveis

 - guardam informaçoes
 - Os valores são armazenados dentro de um espaço da memoria
 - const -> valores não podem ser mudados
 - camelCase

 Tipos:

 - tipos primitivos
   strings(texto), boolean(true or false), number( 1, 2 , 4 , 4.5), null, undifined

   isso no js outras linguagens possuem outras como
   int - numeros inteiros
   float - numeros decimais ( 4.5)
   Numeros complexos -> tem no python(2+3j)
   date - datas

   - qualquer numero que não sera usado para operaçoes matematicas( como numero de telefone), deixar como texto( "27-99954-4354")

Vetores e matrizes:

- vetores são os famosos array ou listas
- são coleçoes de valores que seguem algum tipo de estrutura e logica
- array let pokemon= ["bulbassaur", "charmander"]

- exemplo de vetores no C#
  
  List<string> pokemon = new List<string>() {"Pikachu", "Charmander"}

  pokemon.removeAt(0) // remover o indice expecificado
  pokemon.removeAt(pokemon.Count - 1) // não a equivalente do pop no C# então se faz isso para ter o mesmo resultado

  - C# é uma linguagem fortemente tipada então antes de declarar as variaveis voce tem que obrigatoriamente determinar os tipos
  - não vou colocar todas as linguagens aqui so quis colocar um exemplo de um fortemente tipada

-matrizes
  são vetores bidimensionais. vetores dentro de outros

  let pokemon = [
    ["Raichu", "M", "Eletrico"],
    ["pinsir", "F", "Inseto"]
    ]