# Cenas

 - cenas são como os takes ou seçoes de um jogo
 - cenas são conjuntos de node
 - e possivel transformar objetos dentro de um cena em outra cena. Isso meio que cria um objeto standart ou seja vc cria um objeto que pode ser usado em diversos locais sem a necessidade de alterar a propros para cada copia
 - os objetos que são compactados dessa forma são colocados dentro de uma pasta objets
 - os objetos são convertidos em cenas( com a extensão .tscn) e podem ser rodados individualmente clicando neles e usando o simbolo de take ( no canto sup direito)
  - o godot permite executar uma cena dentro da outra
  - dessa maneira quando vc clona o objeto desse jeito vc mudando as propriedades alteras de todos os clones da cena
  - e possivel criar outra cena com inherit, dessa maneira vc pode duplicar a cena, herdando as props e assim adicionar novas props sem modificar o original