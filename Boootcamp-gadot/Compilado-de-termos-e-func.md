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