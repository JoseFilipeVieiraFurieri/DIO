package main

import "fmt"

// array são sequencias de elementos numerado de um mesmo tipo ( de preferencia)

var frutas [5]string // declaração inicial de array var nome length e tipo
var sumOfThing [5]int

// fatias são um pedacinho do array original

var receitas [5]string

var slice = make([]string, 3) // fatia do array receitas

func main() {
	frutas[0] = "banana"
	frutas[1] = "pessego"
	frutas[2] = "jambo"
	frutas[3] = "durian"
	frutas[4] = "jabuticaba"

	fmt.Println("A minha fruta favorita é", frutas[1], "e a fruta que eu acho um bosta é o", frutas[3])

	sumOfThing[0] = 2
	sumOfThing[1] = 4
	sumOfThing[2] = 6
	sumOfThing[3] = 10
	sumOfThing[4] = 15

	total := 0

	for i := 0; i < len(sumOfThing); i++ { // não tem  . length no go tem que usar a função len(array)
		total += sumOfThing[i]
	}

	fmt.Println(total / len(sumOfThing))

	receitas[0] = "Pão de batata"
	receitas[1] = "CuzCuz de Genipapo"
	receitas[2] = "caçalora flambada"
	receitas[3] = "Pudim de Pupunha"
	receitas[4] = "Omelete de avestruz"

	// var slice = make([]string, 3) // fatia do array receitas, o array vem vazio. se bm que teoricamente nada esta dizendo que o slice é uma fatia de receitas

	var numTest [5]float64

	fatia := make([]float64, 3)

	fmt.Println(fatia)
	fmt.Println(numTest)

	arrTest := [7]float64{1, 2, 4, 7, 6, 7, 1} // outra forma de declarar array, ja inicializado. ai tem o operador curto o tamanho o tipo e os elementos
	fatia2 := arrTest[0:3]                     // agora a fatia esta sendo baseada no array teste. é especificado o começo e o final da fatia
	fmt.Println(fatia2)                        // fatia do array original
	fatia3 := append(fatia2, 4, 5)             // o append é um pouco deferente aqui , ele  recebe uma fatia e os elementos que serão adicionados
	fmt.Println(fatia3)

	// copiar uma fatia para outra

	fatia4 := []int{1, 2, 3}
	fatia5 := make([]int, 3)
	copy(fatia5, fatia4) // ele copia da fatia 5 pra a 4 os elementos.
	fmt.Println(fatia4, fatia5)

}

package main

import "fmt"

// MAPA

// mapas são coloçoes ordenadas de chaves e valores. são em resumo os famosos obj, dics, etc

// var mapTest map[string]int
// map teste é uma lista ordenada de strings com valores int

func main() {

	mapTest := make(map[string]int) // make - criar um map em que as chaves sejam strings que irão receber numeros
	mapTest["idade"] = 10
	mapTest["peso"] = 20
	mapTest["QUI"] = 3200
	fmt.Println(mapTest["idade"]) // acessa atraves do nome da chave adicinada

	aluno := make(map[string]any)

	aluno["nome"] = "Jordival"
	aluno["Sobrenome"] = "Pereira Dos Milagres"
	aluno["idade"] = 17
	aluno["anoDeEntrada"] = "janeiro/2014"
	aluno["mediaCurricular"] = 34
	aluno["Descrição"] = "sujeito taciturno e violento. gosta de dar porrada e praticar obaoba atras da quadra com sua namorada marcinha. Um deliquente"

	fmt.Println(aluno["nome"])
}

// golang for all - nome de site com conteudo sobre a linguagem