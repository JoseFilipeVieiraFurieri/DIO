## Arte 2d

# UM dos passos definitivos e escolher a arte, a cara

# vc mesmo pode criar a arte mais a site que fornecem assets

  - OpenGameArt.org

  - Kenny -> fornece assets, starte kits 2d e 3d, para iniciantes no godot
            - existem pacotes de titles como os de inpuy

  - itch.io
    - fornece titulos de outros desenvolvedores
    - fornece tambem title sites

# Tileset -> e um agrupamente de tiles que forma alguma arte de um jogo

  - Os tiles são mais simples

  - no 3d o que são uns importados os modelos



## Sempre virificar as linceças - e previso ferificar se vc pode utilizar os assets de terceiros
   - se pode utilizar
   - aonde utilizar - comercials e uso pessoal
     alguns projetos não permitem o uso em projetos em que havera revenda ( ex:  na steam) somente em projetos pessoais e de aprendizado
   - ALguns permite o pagamento permitindo  o uso em projetos comeciais

# vc pode salvar layaouts para usar entre projetos

# TileMap
  - um tipo de node usdo para exibir os elementos de um tile pack
  - tem a opção de fazer o load de um tile set ja disponivel

  - cada quadradinho de um tileset possui seu tamnho de pixel, geralmente informado na pagina de download
    o do kenny na aula e de 70x70 px
  - Depois de montado e so usar o pincel e ir colocando os elementos

  - vc pode criar varias camadas: uma de terreono, outra de detalhes, outra de background, etc

# Adicionando colisão

# tilesets

 possuem certas propriedades( sera usado no godot o phshics layer - adocionar caixas de colisão ao title)

 - Physhics layers
 - Terrain sets
 - Navigagation layer
 - entre outros


 # Ordem de renderização

  - controla atraves do z-axis
  - deu erro no meu - rever para frente

# Parallax

- paralax e um efeito adicionado ao cenario de jogos 2d para criar a ilusão de movimento
- o efeito e obtido ao adicionar multiplas camadas de background e fazer com que elas se movam em diferentes velocidas
- um exemplos e colocar nuvens se movendo em um back estatico
- efeito muito usado desde a epoca 16 bit até jogos 2d atuais

- a imagem de background tem que ser adequada a resolução padrão do godot
  se a tela interna do godot for x e a resolução da imagem for 1920/1080p ( full hd)
   vc divide x/1920 e 1080/y ( referente ao eixos)

 # o paralax tem que ser colocado no node Parallax Background do contrario ele vai se comportar como uma imagem estatica

 - observar a propriedade motion

  # o paralax tem como node filho o paralax layer que irão representar as camadas
    - cada imagem sera colocada em um layer

 - Motion
   
   - Se refere ao movimento das camadas
   - tem 3 propriedades
     escala: se refere ao posição e tamanho as outras camadas. 0 , 0 fica a camada no fundo
     offset
     mirroring: repetição da camada, comvem colocar para se repetir na resolução original

   - as camadas são orientadas sempre o mais longe( no ceu)

   - Artes em pixel art alteram o mecanismo de filtro
     não vou entrar mais em detalhes pq não vai no escopo do projeto
    
  - falta bastante coisa na verdade. Eventos, animação, etc