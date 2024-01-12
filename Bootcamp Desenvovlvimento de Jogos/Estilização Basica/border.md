# Bordas / Fontes / Texto


## Borda

- a borda é definida por border: 10px solid black;
  nela é definido : largura, estilo e cor
  e melhor colocar pelo atalho, mesmo pq vc precisa definir um estilo alem da largura se não ela nem aparece
  e possivel definir eles individualmente pra cada lado 
  lembrando:
   - 10px : todos os lados
   - 10px 10px : bottom/top sides
   - 10px 10px 10px: top sides bottom
   - 10px 20px 10px 20px: top left bottom right

# Estilos da borda
  - O estilo padrão e none
  - dotted -> pontinhos
  - dashed -> traços
  - solid -> linha
  - double -> linha dupla
  - groove -> não é groove metal. Da um efeito 3d a borda. O que tem de groove nisso? vai saber
  - ridge -> ele inverte o groove( da um efeito de altura)
  - inset -> da a impressão de um fosso
  - outset -> o contrario do inset ( meio dificil de descrever kkkk)
    obs: e possivel aplicar pra cada lado um efeito diferente

# Cor da borda
  - se não for definido ele seta o cor do elemento
  - se quiser definir uma cor especifica, usar o border-color ou shorthanded
  - Da pra definir uma cor pra cada lado

# Border-radius
  - Arrendonda as bordas
  - Segue o mesmo principio que os outros, da para arrendondar cada canto como quiser, etc(começa sempre no sentido anti-horario - top esq - bot esquerdo - bot direito - top direito)
  - vc pode criar um efeito oval : 20px / 30px ( colocando a barra)
  - Pode usar porcentagem ( no elemento colocar 50, ele faz um circulo)

# border-image
 - coloca uma imagem de borda
 - Não consegui fazer carregar a imagem. Descobri o erro. Eu estava colocando a imagem de borda e depois colocando em baixo a borda estilo solid. Ai o css
   sobrescrevia e dava a impressão que a imagem não carregou. Importante sempre ficar atento a isso
 - No border-image-source o padrão e a imagem ficar nos cantos
 - border image widht : define a largura
 - Repeat define o comportamento do repeat(aceita os valores stretch(alongar), round(redimensionada), space( adiciona um espaço caso a img 
   não caiba))

 # border-image-slice
  - serve para colocar as imagens por fatias
  - o slice divide a borda em regioes
    - Comecando pelos canto superior esquerdo: 1 , 2 , 3 , 4
    - as regiao 5 e o top, 6(right), 7(bottom) e 8(left)
    - O 9 corresponde ao fundo da borda( com a palavra reservada fill)
      o centro da figura e ignorado ( a não ser que o fill seja usado - ai ele fica como fundo)
      Isso acontece pq a imagem e meio que espalhada pela figura
      .exemplo-3 {
    width: 400px;
    height: 400px;
    background-color: aqua;
    border: 60px solid;
    border-image-source: linear-gradient(red, blue);
    border-image-slice: 200;
}
    - Importante obsevar nesse exemplo que voce precisa setar o source primeiro
    - Outro detalhe e que por padrão a imagem se espalha mesmo( acho que faz tipo um cover ou contain), ela não se repete
      obs: e possivel alterar esse comportamento pelo border-image-repeat
    - o border img slice recebe um numero, que determina o tamnho da imagem( ou o modo que ela se espalha). Quanto menor maior a imagem
      o comportamento em si depende muito das dimensoes do container pai, o tamanho da imagem, dificil descrever, mas coloquei um exemplo com repeat
      de uma imagem nos exemplos
      O repeat em si repete nas 8 regioes
    - No caso do fill ele preenche o centro mesmo e vem depois do numero, ele pode sobrescrever a imagem de fundo do background então tomar cuidado

  # border-image-outset
    - o outset define a distancia da imagem da borda para o elemento
    - o e possivel definir as distancias pelos lados, mesmo padrão de sempre(anti-horario)

  # finalizando e possivel utilizar tb um shorthanded 
    border-image: url 169 / widht / outset repeat
    O 169(o slice) tem que definir com a barra pq o widht e offset aceitam mais de um valor(um para os cada lado), então a barra serve para ele não se perder
        
  ## Fontes

   # Tipo de Tipografia
     Os mais comuns são:
       serifadas:
         - Tem a ponta das fontes alongadas como se fossem pontas no final de cada letra
       Não serifadas:
         - Tem as pontas mais arrendodadas sem os pontas no final das letras
       Display:
         - São aquelas mais rebuscadas, tipos aquelas de album de death metal ou comemorativas
       Manuscritas:
         - São aquelas que parecem caligrafias , assinaturas
       Mono-space:
         - Incluem todas as fontes que os caracteres ocupam a mesma largura em cada caracter

    - O google Fonts é o catalogo de fontes mais usada
      - Tem uma porrada de opçoes no site mesmo pra testar as fontes

  # Font-Family

   -Define a fonte que sera usada no texto
   - A propriedade aceita dois valores: a fonte e a familia que ela pertence. Na verdade vc pode colocar so a familia e ele usa uma padrão ou so colocar
     a fonte
      obs: Boas praticas -> quando so é uma palavra não se coloca aspas so quando e mais de uma palavra. Outra observação e sempre usar mais de uma fonte
      pra se ele não achar uma usar a outra
   - Fontes externas tem que ser colocadas na aba link. No google fonts geralmente ja fornece o codigo pronto pra ser importado
     - A como tambem usar o @import pra iss
     - Se o navegador não conseguir encontrar a fonte especificada ele opta por usar uma padrão
     - E possivel definir mais de uma fonte. Isso serve pra caso houver um erro e não conseguir baixar a outra que voce especificar sera usada
       , normalmente e usada uma fonte padronizada e pra ter maior controle ( Se não a fonte e auterada por uma padrão do navegador, e isso pode variar
       entre eles, então se padroniza para evitar que em cada navegador que o usuario entrar ela não se comporte de uma maneira diferente)
       ex de definição:
       <head>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
       </head>

  # Font-Face
    
    - Tem o intuito de criar fontes customizadas
    - No caso o fonte face atua como configuração(regra css). Voce tem que setar ela antes
      @font-face {
         font-family: Kalidor;
         src: local(), url('/assets/fonts/Sacramento-Regular.ttf');
         font-weigth: normal;
      }
    - O @ e usado pra definir isso. Primeiro voce diz o nome que quer usar na fonte e depois o caminho que pode ser uma fonte externa ou no pc mesmo
    - Depois disso so definir a fonte
    - O font-face aceita o valor local(), que serve pra ele procurar a fonte localmente e evitar de fazer download desnecessarios
    - E possivel criar mais de um font-face(para cada fonte um arroba)
    - Voce Pode aplicar regras no font-face, no exemplo acima ele diz pra caso seja usado o font-weigth com a palavra reservada normal, ele usa a fonte
      customizada automaticamente
      outras props: font-style e font-stretch

  # Aplicar a fonte atraves do @import
    - O import é usado atraves da pagina css( como uma regra de css mesmo)
      @import url()
    - Esse modo é bastante usado, geralmente a vantagem e que ele carrega quando a pagina de estili é carregada, e não polui a parte de metadados do head.
    - Pra usar é so especificar o font-family
      obs: importante observar que é sempre importante usar as configuraçoes do google fonts para tanto a importantação quanto o uso do font-family
    - Voce pode tanto usar a na pagina css, quanto por meio do styles no html. Eu prefiro no css, por questoes de organização e manutenção( e sempre melhor definir no global.css os imports de font, porque do controrio toda folha de estilo vc vai ter que importar individualmente)
    - Por questoes de configuração utilizar a url e melhor porque ela ja vem com as configuraçoes, inclusive com regras pra serem usadas caso
      seja alterado o font-weigth 

  # Font-size/style/weigth/etc

    - Font-size: o tamanho da fonte. Pode usar valores absolutos e relativos(ver na aula de medidas). Mais basico vc pode setar em pixel ou usar as
      Palavras-chave(xx-small a0 xx-larger, no css mesmo ja sugere as demais)
       obs: Os valores das palavres chaves calculam com base nas fontes padroes do user, então ela pode variar
       obs: existe duas outras palavras chaves, a larger e smaller. Elas servem para as configuraçoes se basear o tamnho da fonte no elemento pai. smaller vai fazer o filho ter um fonte sempre maior em relação ao pai e larger, maior.
    - Font-style: Define o estilo da fonte
       - os estilos são: normal(padrão), italic e oblique.
         obs: o obliquie é semelhante ao italico, mas menos suportato
       - e possivel definir o italico tb pela tag <i>
    -Font-weigth: Define a espessura da fonte
       - Pode ser usado valores de 100-900
       - E possivel usar valores chaves: normal e bold(negrito)
         obs: o bold pode ser usado como tag <b>
       - Aqui tambem ocorrer as palavras chaves boulder e lighter, que irão levar em consideração ao elemento pai
    -Font-variant: Proprietade bem espcifica. Ela define um estilo chamado versalete mas por padrão e setada como normal
       - aceita propriedade small-caps
    -Font-strech
       - Serve pra alongar a fonte
       - Depende se a fonte suporta a propriedade( a maioria não suporta)
       - Pouco usado
    -Line-heigth
       - define  a altura da linha
       - leva em consideração a font-size( se for 2 o line ele multiplica o font-size por dois)
       - Pode usar porcentagem -> 100 e padrão, 200 dobra ( usando o padrão do navegador)
       - E aconselhavel usar por padrão um minimo de 1.5
    - Por fim usar a prop Font: style variant weigth font-size/line-heigth font-family


 # Text

   - Text-transform
     - Transforma o texto de acordo com o valor escolhido(default - none)
       -valores aceitos:
         capitalize -> primeira letra de cada palavra maiusculo
         uppercase -> todo texto em maisculo
         lowercase -> texto minusculo
         initial -> none
         inherit -> herança ( a maioria das props tem por padrão nos filhos) 
   - Text-align
     - Alinha os textos
     - Tem uma porrada de palavras chaves
       - left, center, justify, center( por padrão e a esquerda)
       - Essa prop leva em consideração as dimensoes do pai
   - Text-decoration(atalho: line style color thickness)
     - Serve pra adicionar decoraçoes no texto
     - Variacoes
       - Text decoration line -> adiciona uma linha
         -nome(defaut)
         -Underline -> linha abaixo
         -line-through -> risca o texto
         -underline
       - style -> estilo da linha
         - solid(default)
         - double
         - dotted -> Pontilhado
         - dashed -> traços 
         - wavy -> ondas
       - color -> define a cor da linha. por padrão segue a cor do texto
       - thickness -> espessura da linha. aceita varias unidades de medida
    - Text-ident -> identação/ recuo do texto inicial( em relação ao começo / paragrafo selecionado pelos seletores) 
    - Letter-spacing -> espaçamento entre letras(default -> normal). Aceita valores unitarios
    - Word-spacing -> espaçamento entre palavras
    - white-space -> define o comportamento dos espaços em branco
         -essa propriedade se refere ao espaços que são dados nos textos. Não é muito comum de ver pq geralmente a pessoa formata o texto ou o lint mesmo
          avisa quando tem espaços em branco em excesso. O css por padrão ignora quebras de linha na formatação( a não ser que a tag br seja usada) e reune os espaços padroes em branco
         -normal(default) 
         - nowrap -> por padrão e ele quebra quando chega no final do elemento o texto. O nowrap ignora isso.
         - pre -> preserva o espaço em branco de acordo com a formatação do html. Ignora definiçoes do pai.
         - pre-line -> espaço em branco são reunidos e respeita as quebras de texto no html ( sem usar a tag <br>)
         - pre-wrap -> preserva os espaços em branco, respeita as quebras
         - break-spaces -> parecido wrap
    - word-wrap -> define o comportamento da linha em questão de quebra
         - normal - se passar a palavra dos limites do elemento, ela ultrapassada
         - break-word - a palavra vai pra proxima linha
    - word-break -> parecido com o de cima so que ele não define so a linha mais o texto inteiro
         - keep-all - preserva
         - break-all - quebra todos
         obs: a diferença dos dois e realmente a linha( um leva em consideração a linha o outro o texto inteiro) - ver exemplo
         obs2: Textos em idiomas orientais(chines, japones e coreano)
    - Writing-mode: define a orientação de escrita
        - A principal função dessa prop é o uso em liguas que são lidas da direita ( tipo manga) e de baixo pra cima
        - valores:
          -horizontal-tb(default - esq para direita)
          -vertical-rl -> o nome explica - rl(right left)
          -vertical-lr
            O texto fica meio estranho, ele fica de lado
    - Text-overflow: quando o texto passa dos limites da div ( overflow: hidden), mostra uma indicação para o user
      - valores:
        clip: corta o texto( o texto vai depois do container)
        elipsses: define .... quando o texto passa dos limites
        string: adiciona um ver mais no texto , no entanto so funciona no firefox(!!!!)
        obs: o indicado nesses casos e usar o ellipses
    