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


# Exemplo de codigo especifico para node Character Body

extends CharacterBody2D

# o personagem ira flutuar no exemplo por isso as mecanicas de gravidade e pulo
# estão sendo removidas. No caso estou deixando como exemplo

# esse é um script especifico para personagens do godot
const SPEED = 300.0
# relacionada ao pulo
# const JUMP_VELOCITY = -400.0

# Get the gravity from the project settings to be synced with RigidBody nodes.
#var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")


func _physics_process(delta):
	# Add the gravity.
	#if not is_on_floor():
		#velocity.y += gravity * delta

	# Handle jump.Lida com a mecanica de pulo
	#if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		#velocity.y = JUMP_VELOCITY
		# é simples se o botao em questão ( ui accept -> no caso espaço no teclado) e se o personagem
		# estiver no chão, ele muda a velocidade do eixo y para a var jump_velocity

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	# get_axis pega so um eixo, get_vector pega os dois( x e y)
	var direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	velocity = direction * SPEED
	# speed multiplica o valor padrão(-1, 1) do vetor para determinar a velocidade de movimento
	# so alteral a constante acima para fazer o personagem ir mais rapido
	# o codigo acima simplifica o abaixo( vou deixar como exemplo)
	#if direction:
		#velocity.x = direction * SPEED
	#else:
		#velocity.x = move_toward(velocity.x, 0, SPEED)

	move_and_slide() # necessario para que a fisica seja simulada