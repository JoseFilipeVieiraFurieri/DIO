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