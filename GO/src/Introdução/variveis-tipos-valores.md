package main

import "fmt"

// var , const , type

const ebulicaoF = 212.0

//float64 é o tipo mais usado no go
// converter F em Celsius
// Tf - 32 / 1.8

//--------------------------------------------------------------------------//------------------------------------------------------------------------------------------------------

// Operador curto

// e o :=, com ele não ha a necessidade de usar o var e o const, mas ele so pode ser usado dentro de escopos

//------------------------------------------------------------/=====================================================================================================================

// Println(line) x printF (format)

// o printLn imprime a linha

// o printF formata o texto

//--------------------------------------------------------------------------------//=================================================================================================

// Exemplos de Tipos

// Primitivos - int, float, string, bool
// compostos - arrays, fatia, struct, mapas

// go é estaticamente fortemente tipada
// Isso significa que não da pra retribuir uma variavel declarada como string com um number depois

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Conversão de tipos

// converte um tipo da variavel a outro

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// pacote fmt

/*
grupo 1 : Print / Printf / Println - ja esta explicado a deferença
grupo 2 : Sprint(retorna um string formatada) / Sprintf(usa os %) / Sprintln( linha)
grupo 3 : Fprint / Fprintf / Fprintln - usa e grava as strings resultandes - usado para enviar dados entre servidores
*/

var a int = 20
var b string = "Joao"

func main() {
	marco := "Marco Iglesias" // exemplo de operador curto. so funciona dentro de escopo( if, for, func)
	fmt.Println(marco)
	var tempF = ebulicaoF
	var tempC = (tempF - 32) / 1.8 // ou (F - 32)*5/9
	fmt.Println("A temperatura de ebulição da agua em Farenheit é de", tempF)
	fmt.Println("A temperatura de ebulição da água em Celsius é de", tempC)
	// no GO não a conversão em tempo de execução que nem no JS

	fmt.Printf("A temperatura de ebulição da agua em Farenheit é de %g,%T e em celsius é de %g,%T.\n", tempF, tempF, tempC, tempC)

	// ele substitui os % pelas as variaveis na ordem, pode ser usado alem do g o, f
	// o %T exibe o tipo das variaveis( tem que estar ao lado e repetir ela nas variaveis a direita)
	/*
		idadeMarco := 10
		idadeMarco = "10" // erro experado ao tentar atribuir um string em um tipo int ( para verificar o erro tirar do comment)
	*/

	var c float64 = float64(a) // conversão de tipo, o a era originalmente int
	fmt.Printf("O valor convertido é: %g", c)
}
