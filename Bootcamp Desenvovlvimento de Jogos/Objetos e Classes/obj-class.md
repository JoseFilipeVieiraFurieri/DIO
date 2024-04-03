# Objetos

 - objetos são coleçoes usadas para armazenar valores
   obs : No python tudo é um objeto então la é chamado de dict ( não é a mesma coisa mas é analogo)
 - São usados em uma estrutura de chave e valores
 - sintaxe:
    const name = {
        chave: valor
    }
 - E possivel armazenar funçoes dentro do obj( são chamadas de metodos) =>exemplos no arquivo js
 - o this e uma referencia ao proprio objeto e usado dentro de metodos pra referenciar o objeto ( o contexto) que estão inseridas
    
# Classes

 - classes são o esqueleto para montar os objetos
 - classes são usadas pra agrupar metodos e atributos
 - classes são usadas atraves de instancia( que são os objetos montados a partir da classe), que são objetos criados atraves de determinada classe
 
  # constructor
   - construtores servem para definir um modelo de classe na hora do instanciamento
     ex :
     class Car {
    modelo;
    montadora;
    numeroPortas;
    kmPorHora;

    constructor(modelo, montadora, numeroPortas, kmPorHora) {
      this.modelo = modelo;
      this.montadora = montadora;
      this.numeroPortas = numeroPortas;
      this.kmPorHora = kmPorHora;
    }

    carDescription() {
        return `O modelo do carro é ${this.modelo} feito pela ${this.montadora}. Ele faz ${this.kmPorHora} km/h e tem ${this.numeroPortas} portas`
    }
}

   - O construtor não e necessario para instaciar a classe mas geralmente e usado, porque senão a classe inicia com seus atributos todos indefinidos
     - O construtor se refere sempre a instancia da classe, estou apontando isso porque a uma diferença importante entre o que é da instancia e que é pra ser usado pela classe ( sem instaciar)

   - voce pode fazer a função receber instancias de classes
     - melhor fazer isso no typescript pq JS é uma linguagem fracamente tipada, sendo assim a classe não aponta erro no caso de ser construida com um tipo sem ser objeto e isso gera erros em tempo de execução

     obs: vc pode fazer na verdade até classes receberem instancias de outras classes. mas isso fica mais pra frente

   

