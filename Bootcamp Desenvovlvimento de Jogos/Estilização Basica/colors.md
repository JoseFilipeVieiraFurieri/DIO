## Cores

- Aqui é sobre os esquemas de cores no CSS , não aquele puta album de metal progressivo da banda Between the Buried and me

- definição de cores

  -Pré-definidas
    - E o modo mais comun, seleciona a cor pelo nome( tem um lista de nomes definidos na w3scholls)

    - Palavra chave currentcolor ->aplica em outras elementos a cor atualmente referencia pelo conteudo(na prop color)


  -RGB E RGBA

  - Sigla para as cores primarias: RED, Green e Blue

  - O RGBA e a mesma coisa so que adicionado de controle de opacidade(A - canal alpha(não dos redpill))

  - rgb(0, 0 , 0) cada valor aceita ate 255. o 4 parametro no rgba vai de 0-1( na hora não precisa nem de colocar o a)

  - geralmente os proprios IDES ja tem um painel de seleção

  - podem ser usadas porcentagem( não e muito comun)

  -Hexadecimal
    - são representadados na base hexadecimal( 0, 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,A , B , C , D , F)

    - color: #000000 - dois primeiros digitos são do vermelhor, os do meio do verde e do final azul
               o preto fica no 000000 o branco no FFFFFF
               cada cor vai de 00 a FF tambem ( as tonalidades)
               e possivel colocar mais dois digitos para a transparencia(00 - FF, 00 totalmente transparente e FF - sem transparencia)

  -HSL
   - significa hue(matiz), saturation(saturação) e lightness(luminosidade)

   - Hue - representa as cores que vai de o a 360 ( roda de cores)
           0 0u 360 - vermelho
           120 - verde
           240- blue
           tem foto dessa roda na net
    - Saturation - Intensidade da cor( 0-100%)
           - indica as escala de cinza( saturação 0)
           - a cor total( totalmente saturada)
    - Lightness
           - indica a luminosidade da cor
           - vai de 0(preto), 100(branco)

    - e tem o A tb no HLSA -> mesma coisa do rgb