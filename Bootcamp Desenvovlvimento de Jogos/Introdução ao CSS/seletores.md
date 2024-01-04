## SELETORES

# Seletores de Tags

- serve pra especificar qual tipo de tag html a ser estilizada

h1 {
    color:red;
}

- Pode selecionar por herança

ol li {
    color: blue;
}

- ira selecionar somente as <li> que forem filhas de uma <ol>

# Seletor de id

- Coloca a propridade id="" no tag html

- se acessa ele no css por meio da #

ex : #id {
    color: red;
}

- id são identificadores unicos e por isso não podem ser repetidos

# Seletor de classe

- coloca a propriedade class='' na tag html
  pode ser passado mais de uma classe so dar um espaço

-no css é identificado pelo .class

 ex: .class {
    color: red;
 }

- a classe serve pra estilizar grupo de elementos pq ao contrario do id ele pode ser repetido

# seletor universal

- seleciona todos os elementos HTML

ex : * {
    font-weight : bold;
}

- Util para definir padroes para a pagina

obs: certos padroes mudam de acordo com o navegador usado, para evitar isso é comun usar esse seletor pra padronizar a pagina entre eles( criar um padrão universal independente do navegador)

# Seletor de atributo

- seleciona tags com atributos especificos

ex: [title] {
    color:red;
}

- aplica a todas as tags que tenham o atributo title, independente do valor

-pode tambem ser especificado o valor

ex: [title="site-noticias-1"] {
    color:red;
}

-pode ser usado tambem pra procurar palavras exatas o so parcialmente

ex: [title~="site-noticias-1"] {
    color:red;
}

nesse caso ele ira procurar a palavra exata ou parte dela por exemplo se uma tag estiver assim <h1 title="site-noticia-1 globo"> vai ser incluso pq deu match
em uma palavra

ex: [title|="site-noticias-1"] {
    color:red;
}

o pipe procura por estruturas do tipo title="streaming-netflix", tendo que estar separado pelo 

-Pode ser usado para procurar so parte de uma palavra

[href^="http:"] {
    color='red'
}

ira procurar tags que tenham o href com o prefixo(no começo) http:

ou sufixo(no final)

[href$="login"] {
    color='red'
}

<a href='http://www.uol.com.brlogin>

[href*="login"] {
    color='red'
}

procura o login em qualquer parte da palavra(*)
