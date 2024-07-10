# Introdução GO

- Linguagem idealizada em 2007 pelo google

- Open source

- Compilada

- Orientada a objetos (sem herança)

- estaticamente e fortemente tipada

- Linguagem que mais cresce em numero de users

- Usado em Serviços de Desenvolvimento web e DevOps

- usam GO: mercadolivre, google, magazine luiza

# o codigo esta na pasta do jose/go devido a convençoes da linguagem

vou colocar o codigo aqui abaixo pra ilustrar

# arquivo GO

package main // pacote principal

import "fmt"

func main() {

	fmt.Println("Hello word")

}

// fmt -> biblioteca que contem as funçoes de print( e mais uma porrada)
// o code runner funciona aqui no go

// o go é uma limgagem compilada então voce tem que criar um arquivo executavel antes de rodar

// os passos são go build hello.go -> go run hello.go

// o code runner testa o codigo 


# Aula 2

package main

import (
	"fmt"
	"reflect"
)

// para ver o tipo e neceessario a biblioteca reflect( que projunto), que tem o typeof

// fundamentos do go

// types

// são tipos ( string, numero e bols )

// o Go é uma linguagem estaticamente tipada ( os tipos não podem mudar)

// number

// int -> trabalha com uint8. 16, 32, 64, int8 e por ai vai
// os 8 se referem ao numero de byts os uint são sos unisisghted integer( os inteiros positivos)

var x int = 8
var y = 1.5

// o GO trabalha com diferntes tipos de int e float, no entanto por enquanto so esta sendo usado os mais comuns mesmo

// String

// representa o texto

// operaçoes possiveis

var nome string = "filipe"

var nomeConcatenado = "Filipe " + "Bolado"

// Boleanos

// true e false

// &&(e) , ||(ou) e !(negação)

// nada de novo aqui

/* Inferencia de tipo */

// o GO tem a capacidade de entender o tipo da variavel ( inferencia de tipo)

var nome2 = "filipe"
var nome3 = "Pedroca"
var nome4 = "Julia"

/* Palavras Reservadas */

// palavras definidas pela linguagem que tem um uso defeinido, não podendo ser alteradas e redefinadas com outros propositos

// ex: breal, const, etc

func main() {
	fmt.Println(reflect.TypeOf(x))
	fmt.Println(reflect.TypeOf(y))
	fmt.Println(len(nome))           // gera o numero de caracteres da string
	fmt.Println(string("filipe"[2])) // acessa um carater especifico - strings são array de caracteres - NO go ele acessa o l mais retorna ele em unicode(108), por isso foi preciso usar
	// o string() ali
	fmt.Println(nomeConcatenado)

	//inferencia de tipo

	fmt.Println(reflect.TypeOf(nome2))

	var mensagem = fmt.Sprintf("%s gosta de %s", nome3, nome4)

	fmt.Println(mensagem)

	// não existe interpolação de string no GO mas pode ser usado o Sprintf, onde %s serão substituidos pelas variaveis descritas
}

Aula 3

package main

import "fmt"

//Expressoes e Comandos

// comando de repetição: for
// de atribuição: :=
// declaração: var
// condicional : if, switch

// var, guardam um valor. não a efeito hoisting

// o GO é fortemente tipada , mas tem inferencia de tipo , o que isso quer dizer ? que voce nem sempre precisa declarar variaveis por que o go ja sabe o tipo que vai ser usado no entando
// vc não pode mudar esse tipo durante a compilação

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//// Blocos  e escopos ////

// representam um bloco de codigo que executa um deterninada função

// uma variavel pode estar dentro do escopo global ou escopo de bloco ( função, laço de repetição, etc )

// Arrays , fatia e mapas//

// array- coleção numerada de dados

// fatia - fatia do array

// mapas - são as tabelas hash, arrays associativos po dics

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Parametros

// parametros são variaveis que são fornecidas a alguma função pra serem processarem e darem ( ou não) retornar e função

// Objetos e Classes

// não ha objetos e classes em Go mas a estruturam que simulam seu uso na linguagem

// Sistemas de Tipos -> conjunto de regras que estabelece um tipo para varias construçoes variaveis , expressoes, funçoes, que o programa computacional e composto

// Interface e Exceçoes

// interface define um comportamente de tipo

type Stringer interface {
	String() string
}

// obs: ela vai explicar , pq esta muito diferente das demais

// go não possui exceçoes

type Pessoa struct {
	Nome      string
	Sobrenome string
	Idade     int8
}

var pessoa1 = Pessoa{"Joao", "Perdeneiras", 32}

func main() {
	var x string = "Eustaquio"
	var profissão = "Jornalista de alta perfomance"
	fmt.Println(`O senhor ` + x + ` é um ` + profissão)
}

