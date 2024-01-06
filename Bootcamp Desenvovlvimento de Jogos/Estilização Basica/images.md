# Propriedade Object-fit


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