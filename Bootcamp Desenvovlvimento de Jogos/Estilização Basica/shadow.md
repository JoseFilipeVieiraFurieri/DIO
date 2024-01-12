## Sombras / Overflow / Outros

 # box-shadow
   - define uma sombra para o elemento
   - Aceita um valor pra horizontal,vertical, desfoque(valor un, aceita negativo( diminui a sombra)) alem da cor
   - e possivel definir o valor inset( sombra interna)
   - pode ter multiplas camadas de sombras( separando com virgula)
   - filter: drop-shadow(20px 20px 1px red)
     no hora de renderizar a sombra e obrigatorio os valores vertical e horizontal se não da erro( não tem default para os dois)
     o esse filter aplica os elementos em volta do texto(em cada palavra), no entanto depende da palavra, se for um logo e estiver
     com um fundo branco, o drop vai agir como um box shadow normal (na verdade ele funciona mas como a imagem é uma caixa, parece que
     é um shadow box, o filter drop-shadow aplica em torno do conteudo do elemento( um texto por exemplo))
     ( Nos casos do texto é melhor usar o text-shadow)

    - O text-shadow aplica no texto um efeito de sombra e aceita as mesmas props do box com exceção do inset( o efeito fica a mesma coisa que usar o drop
      so que como ja existe uma prop para texto e preverivel usar o text-shadow para textos e deixar o drop pra imagens)


 # Overflow
   - define  como o conteudo se comporta ao sair das dimensoes da div( do container, elemento pai)
   - valores:
     - visible -> Mostra o conteudo que saiu
     - hidden -> esconde o conteudo
     - scroll -> Ele cria uma barra de scroll( por padrão ele cria nos dois eixos mesmo se não hover conteudo pra isso)
     - auto -> cria o scroll no eixo se o conteudo ultrapassar os limites da div. Com o auto so cria se houver necessidade
       obs: o overflow so funciona se for definido uma altura para o conteiner, sem definição a div vai crescendo de acordo com o conteudo( isso não e ideal logico pq vai criar um scroll na pagina tornando pior a experiencia do usuario)
       obs:  e possivel definir o o overflow-x e overflow-y e colocar em cada uns dos eixos esses valores


 # Outros
   - opacity: define a transparencia do elemento( aceita de 0-1). Aplica em no conteudo todo( caso seja aplicado em uma div, melhor aplicar no elemento       especifico)
    obs: no caso de deixar so o background transparente e melhor usar o canal alpha(rgba, hlsa), assim evita de afetar o conteudo da div

   # Redefinição as props padrão
     - Os navegadores tem props padroes no caso do css não carregar ele usa o padrão e isso varia entre eles
     - E usada a tecnica de reset para contarnar isso( existem diversas)
      obs: a usada no exemplo foi a do eric mayer
     - vc tb pode fazer uso do *(seletor universal)
        * {
          padding: 0;
          margin: 0;
          verical-align: baseline;
          list-style: none;
          border: 0;
        }
     - O reset e necessario fazer o import em cada folha de estilo
        pra ficar mais facil so usar
          - import url('reset.css') - no começo da folha de estilo para evitar sobreescritas
     