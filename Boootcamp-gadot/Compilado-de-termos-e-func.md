## Compilado de termos, funçoes e outros

# 2D

  + vetor
    - em um projeto 2d corresponde ao eixo x( horizontal) e y vertical
    - assume valores positivos e negativos
    - um dos usos e controlar a posição de objetos e personagens na tela

  + node
    - node representa um elemento na cena especifica de um jogo
    - existe a principal para cada cena e as outras são derivadas( filhas) dela

  + Cenas
    - cenas são as partes que compoem o jogo
    - são compostas pelo nodes
    - cenas tem o simbolo da claque e extensão tscn no godot

  + Script 
    - são o que ditam as interaçoes e açoes que determinado objeto ou cena ira tomar
    - Scripts são colocados nos nodes
    - cada node pode anexar a ele um unico script
    - delta: representa a diferença de tempo entre o quadro anterior e o atual


  # Alguns Objetos(tipos de node) e Ferramentas

    # Color rect
      - triangulos coloridos
      - serve para ter um esboço de areas antes do detalhamento
      - sem demais detalhes

  # Input -> associada com o movimento

     - get vector -> função que atribui os 4 eixos a teclas direcionais

  # Body 2d

    # Rigid body 2d -> define a massa e a gravidade de um objeto, requer um shape(forma) para o filho
      - atua como um corpo 2d que é efetadado pela gravidade. a simulação ja esta dentro do editor ( ja é calculado)

      - Props

       - mass -> peso do objeto
       - escala da gravidade -> aumenta o efeito que a gravidade tem sobre o objeto

       -distribuição de massa
        - auto -> calcula com base na forma do objeto
        - custom -> geralmente fica no centro da massa
          fica um simbolo de cruz definindo aonde esta o centro
          certos objetos tem a distribuição de massa desigual
          vc pode definir o centro da massa 

       - phsica material -> define um objeto com novas propriedades
         - define novos valores como fricção, quicar( bounce), entre outros
         - a propriedade absorvente define se o objeto ao quicar ira ou não absorver o bounce
           por definição se um objeto com absorvente colidir com um com bounce ele ira diminuir o efeito de quicar
           do controrio ele adiciona, meio que empurrando o objeto

    # Static body 2d
      - atua como um objeto 2d, so que esse não é afetado pela gravidade simulada

    # Colid Shape 2d -> cria um corpo , um shape (debug) para adicionar colição  ao objeto

    ## obs importante -> em casos de objetos filhos em uma mesma cena, e importante notar que o filho se posiciona em relação ao pai. ou seja o pai geralmente se posiciona no vetor 0 , 0 mais o filho fica no canto da tela pq ele usa o pai como base e não a cena. Por isso se usa valores negativos para centralizar os filhos em relação aos pais( no caso que usei foi um uma caixa de colição e seu color rect)

    # CharacterBody2d
     - Especifico para criar personagem que irão interagir com a fisica
     - colocando o script basic o godot ja coloca algumas funçoes basicas, como movimento e pulo
       obs: ja detecta até o controle

     - Props
       - motion -> grounded e float

    # axis e vector  


                              
                             +1 y
                             |
                             |
                             |
                             |
  -1 ------------------------0------------------------------ x +1        get_axis = <-, ->
                             |                                           get_vector = <-, -> , down, up - na ordem
                             |
                             |
                             |
                             -1

    - e possivel usar numeros float
    - serve para pegar a pressão
    - por padrão a seta pra direita pega o valor vetor +1, no entando certos controles como os sticks do ps4 podem controlar a velocidade pegando valores fracionados
    - o mesmo serve para o eixo y(pra cima positivo, baixo negativo)

    # Camera2D

     - na cena a caixa azul transparente é a camera
     - para ter maior controle sobre ela e necessario crair o node especifico
     - uma das maneiras mais simples de fazer a camera seguir o personagem e colocar ela como filho dele

    # Sprite2d

     - flip h -> orienta a direção hor. do spr
            v -> vertical

    # Label

     - Especificamente para colocar textos( ou rotulos)

    # Boas praticas Godot

     - arquivos principais da cena -> GameManager

     - scripts vinculados -> na pasta script com o nome game_manager

     matheus.ganem@betrybe.com

  