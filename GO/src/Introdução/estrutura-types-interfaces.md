package main

import (
	"fmt"
	"math"
)

// estruturas são coleçoes de campos(como os dados de usuarios), são uteis para agrupar dados

// type () struct

// parece tipo um objeto mesmo

type pessoa struct {
	nome         string
	idade        int
	jogoFavorito string
}

var ana = pessoa{"carlos", 22, "paciencia"}

// Metodos

// assim como no POO, um metodo é uma função associada a um tipo ( no poo é a um objeto)

type game struct {
	name          string
	genre         string
	howLongToBeat string
}

type retangulo struct {
	comprimento, altura int // pode colocar atb na mesma linha desse jeito

}

func (r retangulo) area() int {
	return r.comprimento * r.altura
}

// r aqui é um parametro que sera colocado quando o metodo for chamado. a função recebe um type retangulo, percebe que esta é a associação. Ou seja a função tera que necessariamente
// receber um tipo retangulo que tera os atbs altura e comprimento. vc separa o parametro do tipo que ele vai receber por um espaço mesmo
// depois e declarado o nome do metodo ( area)

func (r retangulo) perimetro() int {
	return 2*r.comprimento + 2*r.altura
}

// calculando o perimetro do retangulo

// Interface

// interfaces são coleçoes de metodos, funcionam como no POO onde são interface que uma classe herda que consiste de assinaturas de metodos que deverão ser implementos posteriomente
// pelas classes que ha utilizem

type geometria interface {
	area() float64
	perimetro() float64
}

type quadrado struct {
	lado float64
}

// area quadrado = lado**2
//perimetro quadrado = soma dos lados

// area circulo = (PI)*(raio**2)
// perimetro circulo = 2 * r * (pi)

type circulo struct {
	raio float64
}

// Usar a interface em go é so uma questão de usar todos os metodos disponiveis nela. Não sei como fica em questão de organização.

// usando geometria no type quadrado

func (q quadrado) area() float64 {
	return q.lado * q.lado
}

func (q quadrado) perimetro() float64 {
	return 4 * q.lado
}

// pronto foi utilizado aqui a interface geometria. Bem diferente de usar uma interface no POO.

// agora usando a geometria no circulo

func (c circulo) area() float64 {
	return math.Pi * c.raio * c.raio
}

func (c circulo) perimetro() float64 {
	return (2 * c.raio) * math.Pi
}

// pronto utilizado a interface geometria no tipo circulo. O pi ali vem da biblioteca math para evitar problemas de precisão

func medir(g geometria) {
	fmt.Println(g)
	fmt.Println(g.area())
	fmt.Println(g.perimetro())
}

// aqui so é uma funçao pra facilitar o processo de impressão. ai é so chamar medir na main. eu vou deixar dos dois jeitos para ilustrar melhor. a função tem que receber um parametro
// que implementa geometria
// Pode ficar tranquilo que o go mesmo vai apontar erro se for fornecido qualquer parametro que não implemente geometria devidamente

func main() {
	r := retangulo{comprimento: 10, altura: 5}
	q := quadrado{lado: 20}
	c := circulo{raio: 15}                           // para acessar os metodos associados e necessario primeiro declarar o struct ( que nem se fosse uma instancia). Obs: na verdade a função que é declarada aqui
	fmt.Println(pessoa{"ana", 18, "fortnite"})       // como não foi declarado ( lembrando que apesar da semelhança isso não é uma instancia ja que não ha objetos no go)
	fmt.Println(ana.idade)                           // acessa com conotação de ponto
	fmt.Println("A area do retangulo é :", r.area()) // a area ja recebe os parametro na declaração aqui so esta calculando a area do retangulo daclarado acima
	fmt.Println("o perimetro do triangulo é :", r.perimetro())
	fmt.Println("A area do quadrado é:", q.area())
	fmt.Println("O perimetro do quadrado é:", q.perimetro())
	fmt.Println("A area do circulo é:", c.area())
	fmt.Println("O perimetro do circulo é:", c.perimetro())

	medir(q)
	medir(c)
}

// os metodos são associados fora da struct e são como receptores de valores dos metodos. a estrutura é um pouco diferente mas o ideia é pareceda com objetos
// aqui parece que voce esta fazendo de fora pra dentro ja que não e uma classe que esta utilizando a assinatura. O que ocorre e que o tipo usa a assinatura dos metodos
// para definilos baseados nos parametros. lembrando que metodos são funçoes dentro de tipos que servem para receber parametros especificos e interfaces são coleçoes desses
// metodos que deferam ser implementados

// recapitulando

// declarando uma estrutura

/*

type game struct {
	name          string
	genre         string
	howLongToBeat string
}


*/

//declarando um tipo

/*
func (r *retangulo) area() int {
	return r.comprimento * r.altura
}
*/

// perceba que essa função so é considerado um metodo pq eu estou declarando que o parametro recebido sera do type retangulo

//declarando uma interface

/*

type geometria interface {
	area() float64
	perimetro() float64
}

*/