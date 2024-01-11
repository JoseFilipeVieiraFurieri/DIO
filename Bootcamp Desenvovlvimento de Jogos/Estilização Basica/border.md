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