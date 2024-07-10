Tags

- <i> - italico
- <mark> - marcado ( tipo marca texto)
- <b> ou <strong>- negrito
- <sup> - coloca o texto pra cima
- <sub> - pra baixo
- <font> - altera o tipo de fonte usado no texto 
         atb - color=""
               face="Arial"

    essa tipo de tag quase nunca é utilizada devido a estilização ser responsabilidade do css
    mas pode ser usado em pequenos trechos de codigo pra estilizar


Semantica é estruturar o seu HTML de acordo com as regras de semantica para facilitar a leitura(facilita tambem pra leitores de tela)

- <div> e <span> -> são tags estruturais e servem para delimitar um espaço. não tem valor semantico

- <ul>>li*3 - cria uma uma com tres li

- display - block -> ocupa todo o espaço horizontal no caso do exemplo é a div que ocupa o espaço

--------------------------------
--------------------------------- -> cada linha e uma div

- divs por padrão vem no display block

- <span> - tag estrutural que serve para editar pequenos trechos de texto ou inserir textos sem prejudicar a estrutura da pagina

- <label> -> serve pra definir um campo

- <fieldset> -> estruturar o form de acordo com as inofrmaçoes pedidas ( nome , endereco , etc)
   - criar uma imagem no que esta dentro da tag
   - serve pra separar campos dentro do form
   - <legend> - coloca uma legenda no compo ( tipo Dados pessoais)



<embed> -> não é mais usada, serve para carregar midia externa(video, flash) ( se usa agora a tag video)

         - antigamente os sites eram estruturados por tabelas
         - eram carregado todo o conteudo de uma vez so
         - Frameset -> os sites foram evoluindo até cada seção for carregada por framesets ( que equivaliam a div) e cada seção carregava
           indepedentemente
         - se viu a necessidade de criar o site em pedaçoes ainda menores pra inserção de multimidia
           ex: flash player, java e java applets surgiram como recursos

<iframe> -> abre uma janela na pagina com conteudo de outro site. ele literalmente cria uma outra janela com o conteudo do site em uma janela
            No youtube e necessaria usar a opção de incorporar no botão de compartilhar do video

            o iframe incorpora um outro arquivo html no seu, se vc usar o inspecionar vc que o iframe aponta pra o document do outro site
            - Muito utilizada
            - Tem algumas questoes de seguranca ( pesquisar)
            -alguns sites podem recusar a conexão direta por razoes de segurança

-Sobre Cores


  - Os navegadores suportam 140 cores atraves de nomes ( referir ao site do w3scholls, HTML colors)

  - Metodos de escolhas de cores:
     -RGB - metodo de escolha de Red, green , blue. Valores vão de 0-255
     -Hex - rgb so que escrito em headecimal #RRGGBB - os dois primeiros são o  red, depois o green e por ultimo o blue - Vermelho é por exemplo FF00000
     -HSL - sigla pra HUE(matiz)(vai de 0 - 360), Saturation(em porcetagem) e Leghten(iluminação - porcetagem tb). a matiz determina a cor sendo 0 vermelho, 120 verde , 240 azul
     -rgba - mesmo que o rgb so que adicionado o canal alpha(transparencia) - a trasparencia vai de zero a 1 ( 0.1-0.5-1)
     -HSLA - mesmo que HSL, so que adiciona o alpha(transparencia) - referir ao site w3scholl hsl
