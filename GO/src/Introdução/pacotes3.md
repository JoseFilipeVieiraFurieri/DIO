package main

import (
	"crypto/sha1"
	"fmt"
	"hash/crc32"
	"sort"
)

// pacote sort -> para ordenação de dados

type Dados struct {
	Nome  string
	Idade int
}

type ParaNome []Dados

func (ps ParaNome) Len() int {
	return len(ps)
}

func (ps ParaNome) Less(i int, j int) bool {
	return ps[i].Nome < ps[j].Nome
}

// compara se o item na posição i e menor que o item na posição j

func (ps ParaNome) Swap(i int, j int) {
	ps[i], ps[j] = ps[j], ps[i]
}

//troca os elementos( inverte o i vira j e vice versa)

// NO resumo o pacote ele sorteia o conteudo presente na lista ( aqui uma lista dupla). Não sei pq cargas d agua ela colocou o metodo Len, swap e Less ai se nem usou
// simples pq o metodo sort obriga voce implementar esses 3 metodos, o que eu acho um exagero so para sortear uma lista

// pacote Hash / crypto

// Hash aceito um conjunto de dados e reduz ele a um tamanho fixo menor
// um tipo de HASH e o cr32, tem o md5
// Hash são usadas em criptografia e segurança principalmente
// podem ser criptografadas ou não(adler32, crc32, crc64)

type Jogos struct {
	nome          string
	howLongTobeat float64
}

func main() {
	criancas := []Dados{
		{"Julia", 5},
		{"João", 10},
	}

	gamesList := []Jogos{
		{"Dragon Quest 11", 80.5},
		{"Albert Quest: the true hero of pororoca", 12.5},
	}

	fmt.Println(gamesList)

	sort.Sort(ParaNome(criancas))
	fmt.Println(criancas)

	// hash

	// crc32 é um metodo não criptrografado

	h := crc32.NewIEEE()
	// função para escrever os dados em hash
	h.Write([]byte("código com pacote hash")) // esse função cria um fatia de bytes para ser transformada em has
	// calcular o hash
	v := h.Sum32() // o sum32 e quem de fato transforma a fatia de bytes contendo a mensagem em um codigo hash
	fmt.Println(v)

	// metodo sha1 criptrografado

	cry := sha1.New() // aqui so lança o new mesmo
	cry.Write([]byte("Eu sou um rapaz viciado em brigadeiro de canjica"))
	cryPy := cry.Sum([]byte{}) // ele retorna tb uma lista de bytes
	fmt.Println(cryPy)
}