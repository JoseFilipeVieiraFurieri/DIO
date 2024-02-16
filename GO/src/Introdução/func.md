package main

import "fmt"

// Funçoes

// são pedaços de codigos reaproveitaveis que servem para cumprir determinado objetivos e podem ou não dar retorno(procedimento é quando não ha retorno a função)
// funçoes recebem parametros e retornam algum tipo de saida

func media(lista []float64) float64 {
	total := 0.0

	for i := 0; i < len(lista); i++ {
		total += lista[i]
	}

	return total / float64(len(lista))
}

// explicando a construção de função no go - func nome(parametro [vai receber lista]tipo de dado lista) tipo do retorno {}

// closure

// capacidade de um função chamar um variavelm que esa em outra função

var totalXp = 0.0

func xpGain(n float64) float64 {
	totalXp += n
	return totalXp
}

// tem que somar primeiro e so depois retornar a variavel atualizada( se fizer no returno ele não deixa colocar o +=)
// O closure e simplesmente a capacidade de uma função pegar uma variavel de fora de seu escopo pra fazer alguma coisa ou retornar algum tipo de dado
// xpGain esta acessando e atulizando a variavel global totalXp
//errata: o closure na verdade e uma função acessar a variavel de outra função

// recursão

// essa é uma velha conhecida. è a capacidade de uma função chamar ela mesma

func parOuImpar(n int) any {
	if n == 0 {
		return "zero"
	}

	if n%2 == 0 {
		fmt.Println(n, "o numero é par")
	}

	return parOuImpar(n - 1)
}

// a ideia é simples. Se o numero for par vai imprimir senão vai chamar a função com o mesmo parametro so que menos 1(n- 1). importante colocar a parada porque
// do contrario ele ira ficar testando numeros negativos( vai criar um loop infinito)

// exemplo do curso agora

func fatorial(x int) int {
	if x == 0 {
		return 1
	}
	return x * fatorial(x-1)
}

// o fatorial ira chamar por exemplo com o parametro 5. ela ira chamar 5 e ira multiplicar pelo retorno da função fatorial(x - 1) que é 4 ( 5 * 4). depois ele ira empilhando as demais
// chamadas. 5 * 4 * 3 * 2 * 1

// defer, panic , recover

// defer -> escalona as funçoes

func dia1() {
	fmt.Println("Domingo")
}

func dia2() {
	fmt.Println("Segunda")
}

// panic-> erro do programador erro de execução
// recover -> interrompe o panic

// Ponteiro

// serve para armazenar um valor na memoria sem propriamente representar o valor no codigo

func inicial(yPtr *int) {
	*yPtr = 0
}

func main() {

	// isso é closure. a função numero esta chamando a variavel dentro da main

	x := 0.0

	numero := func() float64 {
		x++
		return x
	}

	fmt.Println(numero())

	notas := []float64{5, 5, 5, 5, 5}
	fmt.Println(media(notas))

	fmt.Println(fatorial(5))

	//closure( não e closure so acesso de variavel no escopo global mesmo)

	//fmt.Println(totalXp)
	//xpGain(64.4)
	//fmt.Println(totalXp)

	//ou

	/*
		for _, valor := range notas {
			total += valor
		}

		fmt.Println(total/float64(len(notas)))

		coloquei esse jeito por causa do uso do range
	*/

	//recursividade

	fmt.Println(parOuImpar(11))

	//defer

	//defer dia1()
	//dia2()

	// o defer escalona as funçoes ou seja ela executa o que esta embaixo( dia 2) e depois a que tem a palavra reservada defer

	//Ponteiro

	y := 5
	inicial(&y) // para pegar o valor que esta dentro da função se colocar no parametro o operador & ( alem de o * na função)], do contrario ele ira pegar o y do bloco
	//como demostrado abaixo

	/*
      func inicial(yPtr *int) {
	  *yPtr = 0
}
	*/
	fmt.Println("ponteiro", y)

	// o y que ira voltar ira ser o que esta no escopo do bloco main, mas para fazer o retorno ser o y de dentro da função inicial e necessario usar o ponteiro(*)

	// panic , recover

	defer func() {

		x := recover()
		fmt.Println(x)
	}()
	panic("Panico")

	// isso é o jeito de tratar erro no go. Não existe pelo que li tratamento de try/catch não tem aqui então o tratamento atraves do panic( que eu imagino seja pra lançar um erro)
	// e o recover ( para tratar esse erro). o defer e pra ter certeza que o tratamento vira depois do erro

}
