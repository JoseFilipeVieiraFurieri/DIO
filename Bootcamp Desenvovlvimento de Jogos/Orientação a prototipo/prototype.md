// Orientação a prototipos


# prototipos

 - const pessoa = {

 }

 - const renan = {
    nome : 'renan',
    idade: 30
    __proto__: pessoa
 }

 - A sintese acima esta demostrando a orientação a prototipos. O __proto__ indica que o objeto renan esta se baseando no obj pessoa pra compor sua estrutura
   obs: meio que uma herança
 - Se vc usar renan.sobrenome, ele primeiro percorre o renan e se não encontrar nele o atb, ele muda para pessoa e procura nela
 - exemplos no  arquivo js( com mais detalhes)
 - Em resumo os prototipos são como os objetos do JS herdam atributos e metodos um do outro. Mas o que é visto e a sintese de classe