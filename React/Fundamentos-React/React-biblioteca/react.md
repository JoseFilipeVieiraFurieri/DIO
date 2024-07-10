## React

- react é uma biblioteca frontend para o JS para criação de interfaces e interação do usuario

- Foi criado no facebook

- O react tinha o intuito de simplificar o conceito de estados ( de atualização e renderização de uma pagina)

- Proporciona um melhor integração do css, html e JS

# framework x biblioteca

- biblioteca é um recurso que acumula funçoes ou metodos para uso geral ( tem bibliotecas nativas da linguagem e externas)
  ex: react, moment.js, Voca

- framework são ferramentas que são usadas para desenvolver o projeto, geralmente vem com configuraçoes expecificas 
  ex: Django, Next.js, Ruby on rais, Angular, Vuex( e uma framework da biblioteca vue), Next, o proprio Express


  Componentes Funcionais no React

  Exemplo 

  function Header() {
    return (
        <div>
            <h1>Aqui é o componente funcional do header</h1>
        </div>
    )
}

export default Header;

- componentes são criados como partes de uma peça no react que vai se encaixando e montando a pagina
- Componentes são criados sempre com letras maiusculas 
- O metodo de criação por funçoes são mais recentes

Componente de Classe

import React, { Component } from "react";

export default class Main extends Component {
    render() {
        return <h2>Component de classe</h2>
    }
}

- O componente de classe é um pouco mais verboso ja que vc tem que importar a classe component do react para extender ( herdar) as
  funcionades de um componente

- e mais trabalhoso passar props, pois a necessidade de usar o construtor de classe e fazer o bind de cada função usada pelo componente de classe  

- E usado no mercado 99 por cento o funcional devido a ser mais pratico e rapido

Exemplo de passagem de props e componente dinamico

function NavBar({href, site}) {
    return (
       <a href={href}>{site}</a>
    )
}

export default NavBar;

- Pode ser feito dessa maneira tambem function NavBar(props) {
    const { href, site } = props
    return (
       <a href={href}>{site}</a>
    )
}

export default NavBar;

- Os componentes possuem um atributo chamado props que é onde ficam armazenados as props passadas. vc pode usar o obj descontructing
 para acessa-las

- A ideia central do react é essa, componentes centrais que podem ser reutilizados
- Os componentes irão receber as props que serão passadas quando forem renderizados na pagina

import Header from "./components/Header";
import Main from "./components/Main-page";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NavBar href={"https://www.dio.me/"} site="DIO" />
      <br/>
      <NavBar href={"https://portfolio-next-tailwind-chi.vercel.app/"} site="Portfolio" />
    </div>
  );
}

export default App;

- mesmo componente sendo chamado so que passando valores diferentes nas props

- E extremamente importante deixar componentes sempre dinamicas para evitar redundancia de codigo. Não colocar nomes fixos ( hard coded)

- Isso ajuda demais na orgazição e manutenção do codigo

- O jsx sempre so retorna um componente, então se for necessaria um componente com mais de uma tag usar o fragments <></> ou uma div
  ( ou qualquer tag que engloba)



## Ciclo de vida

- No react os componentes possuem um ciclo de vida que abordam desde o começo da renderizão dele na tela até sua remoção

Os estagios são os seguintes:

 constructor -> etapa da costrução do componente

 1- getDerivedStateFromProps
 2- componentDidMount
 3- shoultComponentUpdate
 4- render
 5- getSnapshotBeforeUpdate
 6- componentDidUpdate
 7- componentWillUnmount

 em resumo o did mount, update e unmount são os mais importante. Atraves do react e possivel manipular

 - Em questão de estado e necessario ir com calma porque é um treco mais complicado, melhor ir relembrando aos poucos

  - estado de um compnente e o fase do componente, por exemplo um botão quando pressionado o botão fica ativo e ele precisa ser renderizado

  - Os filhos do componente  tambem são renderizados junto