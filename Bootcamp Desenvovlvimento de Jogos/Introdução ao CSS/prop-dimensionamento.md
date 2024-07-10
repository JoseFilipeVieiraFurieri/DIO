# Propriedades de Dimensionamento e Espaçamento

# widht - Largura

 - define a largura de um elemento

 - no css existem diferentes unidades de medida como px, em, etc(esqueci o resto quando lembrar coloco kkkkkk deu branco)

 - ex : uma div por padrão ocupa o widht inteiro da tela( pelo display box)

 - palavras chaves(não existem so para o weight e heigth)
   auto - ocupa 100% do espaço da tela(horizontal). isso no entanto varia de acordo com a tag, em um botão ela ocupa o espaço do conteudo( o que esta escrito no botão). No height o auto tem o mesmo padrão do button ele se adequa ao conteudo da div por exemplo

   initial - aplica a prop padrão. por exemplo o padrão do width é o auto(100%)

   inherit- aplica a propriedade do pai no filho. ele herda a prop. Nos meus testes não funcionou muito bem. Por algum motivo o heigth dos elementos continuaram 18 px. Imagino que seja por que eles não podem sair da div pai vai saber.

# height - altura

  - define a altura


# max, min , height e weigth -

 - define a altura(e largura) maxima e minima que o elemento deve respeitar

 - Um botão por exemplo tem como caracteristica respeita o conteudo dele(fit-content). No entento se vc definir uma largura maxima de 500px, ele ira aumentar sua caixa
 ate chegar ao 500px e depois disso ira quebrar o texto

 - O min e o contrario sem muitos segredos. No caso do heigth ele geralmente se adequa ao conteudo. quando vc coloca um minimo ele começara geralmente ocupando bem mais espaço que o conteudo


# Margin

 - Margem e o espaçamento entre os elementos externos e a borda
    margin: 25px 10px 0 0; top right bottom left

    isso é um atalho o css le na ordem cima,direita,baixo e esquerda

    vc deixar um valor so ele ira aplicar esse valor em todos os lados : margin : 25px;

    se deixar dois ele reflete: margin 25px(vai colocar 25 em cima e baixo), 25px( esquerda e direita)

 - a margim mais a borda da div se junta com a margem da div e para dar a margem para o elemento mais externo(outra div)

 - outras divs dentro da mesma levam em consideração a div irma mais acima( ou ao lado, ou mesmo a tela)

 - e possivel separar a primeira div da borda da div pai com o border

 -margin : auto. geralmente ele calcula uma margem na direita e esquerda com o espaço que o elemento tem sobrando( ex no caso as margens da tela)

 - Pode ser aplicar valores negativos. nesses casos os elementos entram na margem da tela

 # Padding

   - Separa o conteudo das bordas dele

   - lembrando que ele separa o a borda de uma div por exemplo do conteudo dele( que pode ser um paragrafo, imagem, etc)

   - sempre inspecionar os elementos e levar em consideração as divs em volta e seu conteudo

   - o modelo no inspect ja é bem autoexplicativo


# Box sizing

 -como são calculadas os widths
    width = Largura + border + padding

 - Isso faz com que aumentando o padding o elemento aumente de tamnho por consequencia

 - o atb box-sizing que suporta dois valores
    -content-box: comportamento padrão
    -border-box: ele redemensiona a altura e largura para respeitar as dimensoes originais do objeto(dependento do que se coloca no padding)
      ex: vc coloca 200px mais coloca um padding-left de 40px, o elemento vai ter no total( considerendo que não a borda) 240 px
          no entando com o border box ele ira redimensionar a altura e largura para  para respeitarem os 200px. com isso 160px + 40px = 200px
