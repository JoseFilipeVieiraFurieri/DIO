package main

import "fmt"

const idade int = 12

// Operadores Logicos

/* Sem segredos
&& - And
|| - or
! - negação
*/

func main() {
	if idade >= 18 {
		fmt.Println("Maior de idade")
	} else if idade < 18 && idade >= 12 {
		fmt.Println("Hora de malhação")
	} else {
		fmt.Println("Leite com pera pra voce muleque!.")
	}
}
