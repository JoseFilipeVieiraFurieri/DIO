extends Node


# Função chamada no começo da cena
func _ready(): 
	pass # Replace with function body.


# Chamada a cada frame da cena. o delta se refere ao tempo entre o ultimo frame ao atual(dado um espaço qualquer durante). Lembrando que os mais comuns são 60 fps e 30 fps
func _process(delta):
	pass

# função interna que se refere a um evento de input. ele pega qualquer evento de input. exemplo estava com meu controle de ps4 e ele estava reconhecendo os inputs. obs: o movimento do mouse tambem e contado
func _input(event: InputEvent) -> void:
	print(event)
	pass
