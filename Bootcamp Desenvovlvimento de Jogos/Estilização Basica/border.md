# Bordas / Fontes / Texto


# Borda

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