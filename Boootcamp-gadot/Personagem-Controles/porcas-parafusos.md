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
