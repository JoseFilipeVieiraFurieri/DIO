# Conceitos gerais

  # Sintaxe jsx
   - é uma sintese que une o codigo js com o html
   - serve para criar componentes de forma mais simples e intuitiva

   - sintese 
     const app = () => {
        return (
            <div></div>
        )
     }

     - e o arquivo app mais a criação de um componente segue essa base. No caso acima a criação de um componente funcional( a os de classe tb), que é o modo mais utilizado

     - e necessario sempre que os componentes tenham um pai, que pode ser uma div ou melhor ser um fragment
       o fragmente <></> não existe no codigo então fica  mais facil de organizar o componentes
       
       ex com fragments:

    import React, {useState} from "react";

     const app = () => {

        const [arrNumbers, setNumbers ] = useState([ 1 , 2, 3 , 4 , 5 , 6 ]);
        
        return (
            <>
             <div></div>
             <div>{1 + 1}</div>
             {arrNumerbers.map((item) => (
                <p>
                 multi5 = {item * 5}
                </p>
             )
               
             )}
            </>
        )
     }

     - para colocar codigo js( como no exemplo acima com a operação) e necessario abrir {} ( isso dentro do return, acima no componente vc pode colocar o codigo)
     - coloquei um exemplo do de map acima pq e muito utilizado
     - ele citou o useState então vou colocar aqui
       para o uso vc tem que importar o hook da biblioteca do react

       o estado tem um nome e uma função para alterar seu valor
       - lembrar que o estado é imutavel por regra voce não pode alterar ele ( fazendo um push no array acima por exemplo), então e necessario toda vez que usar a função  set( o nome e uma convenção na verdade vc pode colocar qualquer coisa mas por padra e [nome, setNome], por questoes logicas mesmo)

       - o estado tambem no caso acima e so acessivel pelo componente, e possivel acessar por meio de prop drilling, somento dos pais para os filhos , mais é bem confuso e não aconselhavel. Existe ferramentas para isso como o contextAPI e REDUX para geranciamente de estados na aplicação(o context é nativo do react, atraves do useContext, mas o redux se não me engano e de externo)

       - Outro hooks é o useEffect que dispara mudanças quando a a alguma mudança de codigo. No de classe era usados funçoes especificas como componintDIdMount, willUnmout, etc

       useEffect(() => {
        setTimeOut(() => {
         setNumbers([...usuarios, 23]);
        }, 3000)
       }, []);

       - o setTimeout chama uma função a partir de um determinado numero de tempo( segundo parametro ), no caso acima 3 segundos
       - o setNumbers é função para alterar o estado do arrNumbers
       - o ...numbers serve para comcatenar o que ja estava dentro do arrNumbers e so adicionar o numero novo, do contraria iria haver uma sbstituição de valor
       - o [] é usado como segundo argumento do useEffect, ele diz quando monitorar o estado( no caso se não me engano o [] e no carragamento inicial)
          


     # Componentes de classe e funcionais

      - para exemplificar vou colocar a seguir o um exem de classe e funcional

       import React, { Component } from "react";

       class App extends Component {
        state = {
            users: ["Joaquim", "Dudu", "Evagelista"];,
        }

        render() {
            const { usuarios } = this.state

            return (
                <div>
            )
        }
       }

       - o componentes de classe é mais verborragico na sintexe
       - o state se refete a estado de um determinado componentes ou objeto naquele momento de seu ciclo de vida. Qualquer mudança nesse
         componente( cheja um valor, uma nova renderização , etc) a por consequencia uma mudança de estado
       - extends se refere a hereança ou seja o componente App esta herdado de uma classe nativa do react (component) assim temdo acesso aos metodos referentes aos componentes
       - o componente funcional simplifica a escrita, por isso hj em dia pouco e usado, no entanto devido a sistemas antigos( referente a manutenção dos mesmos), e importante saber a sintaxe
       - fora isso nos componentes funcionais se usa os hooks, tem uma porrada mas para estados se usa o useState


  # Ciclo de Vida
  
     