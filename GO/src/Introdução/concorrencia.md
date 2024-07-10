package main

import (
	"fmt"
	"time"
)

// Concorrencia ----- executar multiplas tarefas em paralelo

// Goroutine -> é uma função capaz de executar de modo concorrente( compartilhando recursos) com outras funçoes

func incrementValue(number int) {
	for i := 0; i < 10; i++ {
		fmt.Println(number, ":", i)
	}
}

// canais -> modo de duas goroutines sincronizarem sua execução
func pingar(c chan string) { // o chan é a palavra reservada para canal. È para indicar que o c é um canal
	for i := 0; ; i++ {
		c <- "ping" // usado para receber e enviar mensagens pelo canal( o canal c). essa mensagem "ping" esta sendo enviado para c por meio do <- e sera impressa na outra função
	}
}

func imprimir(c chan string) { // imprimir esta indicando o mesmo canal que o de cima
	for {
		msg := <-c
		fmt.Println(msg)
		time.Sleep(time.Second * 1)
	}
}

// Select

// select funciona como um switch para canais e sendo combinado com o goroutines cria um recurso valioso na linguagem

func main() {
	/*
		go incrementValue(2)
		var escreva string
		escreva = "Solimoes"
		fmt.Println(escreva)
		fmt.Scanln(&escreva)
	*/

	// vamos la , em resumo a concorrencia pode ser entendida como um tipo de assincronismo. Ou seja a execução de determinada função ou tarefa e executada em paralelo com o programa
	// principal e não interrompe ele
	// o exemplo do curso não mostrou isso direito pq não sei o que cargas da agua ela usou uma função que não da retorno visual o scanLn armazena uma var em um ponteiro especifico
	// então não da pra ver que de fato ele esta executando em paralelo com a increment, ela explicou depois mais ainda então não ficou muito claro. Coloquei um print normal mas e meio dificil de ver ainda pq o print ocorre em muito rapido
	// & é usado quando quer se retirar o valor da variavel do ponteiro no contexto
	// obs: pesquisar direito o que o scan faz

	// canais

	/*

		var c chan string = make(chan string) // aqui o canal e de fato é criado. quando ele é e usado nas func acima ele so foi declarado

		go pingar(c) // o pingar recebe o argumento que é o canal c
		go imprimir(c)

		var entrada string
		fmt.Scanln(&entrada)

	*/

	// vou explicar o que acontece aqui e porque ela esta executando o scanln ao inves do println

	/*
		      - o que acontece e bem simples mas quando vc não conhece ainda a linguagem se perde mesmo ( e o curso não explica direito). quando vc pode pras rotinas executarem e imprimirem
			  a mensagem ping. elas começam so que ocorre um problema o main() encerra sua execução antes de elas poderem fazer isso, interrompendo o fluxo. E por isso que ela coloca o scanln
			  - O scanln espera que o usuario insira um valor , então o programa main() não ira se encerrar enquanto isso não acontecer e enquanto isso o pingar e imprimir irão sendo executados
			  em paralelo; Se voce der enter ele encerra pq justamente ele entende como se o usuario digitou o valor e encerrou o programa principal
			  - O problema e que a professora não menciona em nenhum momento isso a respeito do scanln( ela manda ver a documentação que nesse caso confunde mais), ela sequer menciona que o pro-
			  grama main pode encerrar as goroutines prematuramente
			  - O println não funciona pq ele não faz o programa main esperar , ele imprimi o valor libera o main que encerra sua execução e com isso as goroutines. tanto que ele somente imprime
			  o valor se esse caso for testado
	*/

	// Select

	c1 := make(chan string)
	c2 := make(chan string)

	go func() {
		time.Sleep(1 * time.Second)

		c1 <- "um"
	}() // esse é uma maneira de chamar a função depois de criada imadiatamente( com o uso do ()). A professora não menciona isso
	go func() {
		time.Sleep(2 * time.Second)

		c2 <- "dois"
	}()

	for i := 0; i < 2; i++ {
		select {
		case msg1 := <-c1:
			fmt.Println("receive", msg1)
		case msg2 := <-c2:
			fmt.Println("receive", msg2)
		}

	}

	// o select aguarda cada um dos valores e responde de acordo com o que chega. Por definição o a func do c1 sera chamada a cada um segundo e a c2 a cada dois o c2. assim o select ira
	// esperar e receber a mensagem vinda de cada canal e responder de acordo obs: nesse caso so ira imprimir uma vez mesmo cada uma, pq o sleep esta dentro da função( ira chamar a função
	// que ira esperar um segundo e ira enviar para o canal a mensagem um que ira ser recebido pelo select), idem com o c2. O for e so pra chamar o select( as funçoes enviam antes para os
	// canais os valores)
}
