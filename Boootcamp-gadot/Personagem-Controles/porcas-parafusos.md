# Porcas e parafusos do jogo

 # Mecanicas

  - são as engranagens no que o jogo se baseia

  - mecanicas de combate, crafting, npc, relacionamento, objetivos

  - mecanicas são formas que o jogador tem de interagir com o mundo do jogo


  # animatedSprite2d

   - tem o intuito de colocar um sprite de forma simoples que tera uma animação especifica
   - tem a seção animation com a prop frames
   - ele posibilita a adição de frames shets ( a arquivos com os quadros da animação) e selecionar os quadros que serão usadas
     a partir dai a animação esta criada

  # IA dos inimigos

   - O termo IA e usado a decadas nos jogos
     na verdade são padroes de codigo que dita o comportamento do inimigo, quando eles
     irão atacar, que ataque , etc

  # Na hora de executar a cena , na canto esq sup, logo abaixo da aba de scene e do filter, tem duas seleçoes
    - remote
      se refere a cena em play
      - o node root representa a janela da cena em play
        pegar do root no entanto pode dar problema devido a renderização e renomeamento de variavel

    - local -> se refere a cena estatica  

    - o cara vai usar o padrão singleton para disponibizar variavel globais para ser acessados por todos os nodes
     
      - isso se aplica em:
        - criar um script game_manager
        - colocar esse script no settings -> autoload
          isso faz com que o script sempre seja carregado antes de todos os outros
          tambem disponibiliza as variaveis nele de forma global
          obs: seria como um o redux e o hook UseContext

        - Voce vai no script aonde vc quer pegar a variavel e na função process
          vc coloca Gamanager.player_position = position
          isso vai atualizar a cada quadro a posição do player

        - por ultimo essa variavel pode ser acessada no script do player por Gamemanager.player_position
          e basicamento o useContext mesmo so que mais facil kkkkk

        - Uma maravilha esse singleton

  # no godot so pode colocar um script por node

    # existem maneiras de contornar isso como colocar o script de comportamente e um NOde filho


  # grupos

    - são um maneira de agrupar nodes
    - fica na aba node ao lado do inspect( aba Node)
    - vc cria um grupo e coloca um node dentro
    - depois vc pode acessar os elementos desse grupo em outro script dessa maneira
      var enemies = get_tree().get_nodes_in_group("enemies")
      - o get_tree e necessario para acessar a arvore do pawn e pegar os nodes no grupo enemy

      obs: ele tipou os script colocando que era do tipo enemy
      so que no codigo do stalk_player ele tenta atribuir ao enemy( que agora é uma classe Enemy) o pawn ( que é um charbody2d)
      o meu godot não deixou nem por reza essa traquinagem então ignorei completamente a tipagem por classe. o dele foi sussa, vai entender


# ANimation player

 - e possivel chamar funçoes de acordo com a  animação
  so colocar no + o "call method track" e escolher a animação e em que sprite ela sera chamada

  # usar o animated sprite 2d para animaçoes mais simples

 - No caso a animação de morte chama uma função nativa
   ## a queue_free() que depois que toca a animação o elemento e removido do jogo

# Area 2d

 - node que cria uma area especifica na cena
 - pode ser usado para colocar hit-Box


# DOT PRODUCT

 - função matematica que obtem um resultado a partir de uma comparação de vetores

   personagem(2, 2)    vetor.visão     --------------------------------------------->       inimigo( 4, 2)
                       vetor.ataque    --------------------------------------------->                         

 - o godot ja tem uma função para calcular o dot product que ira retonar sempre valores entre -1 a 1
   1 sera quando as duas linhas estão perpediculares
   -1 o jogador esta olhando ao contrario
   se for em outro angulo 0

   - em resumo o dot product compara se dois vetores estão indo na mesma direção( mesma(1), oposta(-1), acima(0), 45graus(0.5))