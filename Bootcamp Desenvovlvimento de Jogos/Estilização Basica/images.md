# Propriedade Object-fit/Background-clip/origin


# object-fit
  - Propriedade que determina como a img se comporta dentro do container que ela esta disposta( pode ser o body, uma div, etc)

  - Fill -> respeita a largura e altura do conteiner(padrão)

  - Contain -> adequa a img pra caber no container(redimensiona) - comigo não funciona so mudando o widht da imagem

  - cover -> não distorce a img e prenche o container - por algum motivo a imagem padrão que eu peguei não esta sendo alterada pela prop objetc-fit(não sei pq, pode ser as configuraçoes da img ou do navegador, então so vou descrever)

  - none -> mantem as dimensoes originais da img, fica com um overflow hidden

  -scale-down -> escolhe a configuração que fica menor em questão de escala em relação a div( down -> diminui)


# object-position

  - define a posição da img nos eixos x e y(horizontal e vertical)
  - usado em conjunto com o object-fit
  - infelizmente meus exemplos não estão funcionando, tem uma configuração do navegador que esta dizendo para as imagens sempre fazerem overflow na margem da div , estão eles sempre ignoram os limites do container e as propriedades de object-fit e object-position
  - so ta dando pra mexer especificando o width e o heigth da img
  - object-position: x y; - pode ser tanto em porcetagem, pixel, etc
  -pode trabalhar com valores negativos
  - tambem aceita valores chaves
    left - mais a esquerda
    right- mais a direita
    bottom - abaixo
    top - topo
    start e end

  # background-img

  - define uma imagem como fundo 
  - por definição se a imagem for menor que o container ele vai se repetir
  - linear-gradient -> define um degrade na cor(vc define as cores por ordem)
  - radial-gradient -> define o degrade em um circulo
  - repeat-leniar-gradient -> define as configuraçoes de repetição para o gradient
    background-image: repeating-linear-gradient(red 0 20px, blue 20px 40px);
    serve para o radial tb
  - CSS3 patterns -> site com padroes de css de fundo para referencia
  - pode definir mais de uma imagem de fundo
    background-image: url('1'), url('2')

  # background-size

    - redimensionar a imagem de fundo
    - auto -> redimensiona automaticamente. È o comportamento padrão. Nesse apesar do nome parecer um ajuste não é assim que funciona.
              Se a imagem for muito grande ela vai so mostrar o que cabe no container pai(se for por exemplou uma div 400x400 so ira caber um pedacinho)
              se for menor a imagem vai ficar se repetindo
    - cover -> ajusta a imagem para caber no div pai. aqui ocorre um redimensionamento. a imagem é ajustada para cobrir o fundo da div pai. pode haver
               perda se a imagem for muito grande. Se a imagem for pequena ela é esticada podendo perder qualidade com isso
    - contain -> Ele redimensiona a imagem para caber por inteira na div, mesmo que sobre espaço nela( por padrão ela repete). diferente do cover ela
                não cobre todo o espaço So o minimo pra imagem caber de fato na div
    - pode usar o valor em pixel, porcetagem, etc( uma valor so define a altura, e o heigth fica auto, mas é so passar um valor extra)
    - Pode ajustar a camada em mais de uma figura( em camadas)
      .exemplo-3 {
         width: 400px;
         height: 400px;
         background-image: url('https://dnqbkcosir3ug.cloudfront.net/images/CharacterMain_role_tevi.png'), url('https://s5.static.brasilescola.uol.com.br/be/2023/11/lava-que-no-interior-do-vulcao-se-chama-magma-escorrendo-na-superficie-terrestre-apos-uma-erupcao-vulcanica.jpg');
          background-size: contain, cover;
      }
      -Isso é uma outra maneira de configurar sobreposição de imagens( tem exemplo no arquivo images.html). Os parametros respeitos a ordem de camadas que foi
       colocado no back-img

  # background-repeat

    - por padrão a imagem se repete(repeat)
    - repeat-x -> so se repete no eixo x( idem para o y)
    - space -> se repete mas ocorre um espaçamento nas imagens ( nos dois eixos)
    - round -> as imagens se repetem mas são redemensionadas para não haver cortes
    - no-repeat -> sem repetição
    - pode ser colocado valores diferentes no eixo x e y ( so colocar mais de um valores)
      background-repeat: eixo-x eixo-y

  # background-position
    - define a posição da imagem no container
    - Os valores podem ser right,left,etc( tem tb center)
    - aceita como os outros valores separadas por eixo
    - pode ser colocado por camadas , por valores relativos(bottom 20px right 10px)

  # background-attachment
    - define o metodo de scroll da imagem. o Padrão e fixed. O fixed faz a imagem ficar presa no fundo, mesmo como o scroll da pagina
    - Scroll -> ele rola de acordo com o conteudo do elemento. Por exemplo se houver muito texto ele vai criar um barra de rolagem
    - local -> rola junto com o conteudo
       obs : importante notar que scroll fica fixo indepedente da rolagem do texto. O local faz ele rolar junto ao texto. No entando se não houver
       conteudo suficiente para gerar o scroll não acontece nada( depende do tamanho da div pai)
  
  # background-origin
    - padding-box -> ponto de origem no canto superior direito. nesse ele não ocupa a borda, somente o conteudo interno da div
    - border-box -> começa na esquerda. cobre todo o conteudo da div incluido a borda
    - content-box -> cobre somente o conteudo com a imagem

  # background-clip
    - parece funcionar parecido com o origin(na questão do content-box, padding, border)
    - da para colocar de fundo o background no texto, mas precisa fazer uma configuração especifica
      webkit-background-clip: text;
      color: transparent;
      background-clip: text;
      obs: precisa adicionar o webkit, o chrome não tem isso como padrão

  # mesclagem
    - adiciona um efeito de mesclagem da cor de fundo do elemento(bck-color) com a imagem
    - background-blend-mode
      multiply: acho que é o padrão do esquema. ele meio que junta o back-img com o color( meio que a img fica com o tom da cor)
      overlay: significa sobreposição. meio dificil de explicar mas a cor meio que fica por cima da imagem. em comparação com o anterior. parece 
      que a imagem ficol com um vermelho por cima, um aspecto menos lavado que o de cima
      screen: não entendi a cor de fundo parece que sumiu
      obs: o efeito de blend e mais complexo dificil de descrever. meu exemplo não ficou muito bom ja que não peguei um pattern muito bom. Mas é bom saber 
      que existe. Tem mais valores mas vou deixar por isso mesmo
      no codepen tem exemplo disso para visualizar melhor( so colocar background blend mode).

  # obs: e possivel usar o atalho background para especificar todas acima para evitar ter que ficar digitando background
.exemplo-6 {
    width: 400px;
    height: 400px;
    background:
    linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, #ECEDDC 25%, transparent 25%),
    linear-gradient(45deg, #ECEDDC 25%, transparent 25%);
    background-size: 100px 100px;
    background-color: #EC173A;
    background-blend-mode: screen;
}

e possivel definir os valores emitindo o nomes da propriedades
   background:
    url()
    top center 
    no repeat
    fixed / attach
    padding-box / origin
    content-box / clip
    color

importante ter cuidado com a ordem , o css tb le de cima pra baixo então se for adicionado um back-color red e depois um back: color : blue;.O blue
que vai ficar de fundo

  
      