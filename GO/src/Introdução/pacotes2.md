package main

import (
	"container/list"
	"errors"
	"fmt"
	"log"
	"os"
	"path/filepath"
)

//pacote Os //////////////////////////////////////////////////////////////////////////////

// Ja usei antes mas umas das funçoes dele e abrir, ler e escrever em arquivos

func openFile(file string) {
	readFile, err := os.OpenFile(file, os.O_RDWR|os.O_CREATE, 0755)
	if err != nil {
		log.Fatal(err)
	}
	if err := readFile.Close(); err != nil {
		log.Fatal(err)
	}

}

// função pra ler um arquivo o tratamento de erro e os modos de leitura foram retirados da documentação. mas simplificando, o openfile vai abrir o arquivo especificado no modo RDWR
// senão achar o arquivo ele cria o mesmo. o numero representao filemode. E necessario sempre usar o close depois de abrir qualquer arquivo

func writeFile(filepath string, newText string) {
	text, err := os.OpenFile(filepath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, 0644)
	if err != nil {
		log.Fatal(err)
		return
	}

	_, err = text.WriteString(newText)
	if err != nil {
		log.Fatal(err)
		return
	}
}

// essas funçoes são um pouco dificeis de serem usadas sem a documentação mais vai oque eu entendi. Primeiro para escrever voce precisa abrir o arquivo. O arquivo foi aberto
// e feito todo tratamento de erro. e depois a função pega esse texto aprmazenado e usa a função writeString ( que parecer ser um metodo direto para arquivos do tipo) e escreve o novo
// texto. um adendo seria para os parametros do openfile, vc sempre tem que especificar a filepath, o modo de abertura( leitura, escrita, criação) mo caso ali abre em modo de escrever
// mas se o arquivo não for encontrado ele cria. o truncate foi sugestão da documentação então não sei e por ultimo um filemode(numero que eu ainda não sei mais a fundo)
// Parece complicado mas é so protocolar mesmo

//// pacote Path/FilePath /////////////////////////////////////////////////////////////////////////////////

// serve para manipular rotinas para facilitar o acesso a caminhos de arquivos do sistema

// path func walk

func directoryAcessInfo(path string) {
	filepath.Walk(path, func(path string, info os.FileInfo, err error) error {
		fmt.Println(path)
		return nil
	})
}

// da acesso e printa as pastas correspondente ao diretorio especificado. a função em si walk, aceita o caminho, o modo de leitura e um tratamento de erro. obs: novamente
// o acesso a documentação para uso correto é imperativo

// Pacote error, Container List

// pacote error

// - serve para manipulação de erros

// lancar um erro simples

// err := errors.New("Ocorreu um erro simples")

// pacote Container

func containerListExample() { // o tipo retornado pelo pacote usado
	l := list.New()
	e4 := l.PushBack(4)
	e1 := l.PushFront(1)
	l.InsertBefore(3, e4)
	l.InsertAfter(2, e1)

	// Iterate through list and print its contents.
	for e := l.Front(); e != nil; e = e.Next() {
		fmt.Println(e.Value)
	}
}

// a função ficou um pouco complicada mais ele cria uma lista, adciona 4, depois 1 como primeiro indice( pushfront). O insert before e o insert after são autoexplicativos
// Todas são funçoes do pacote container/list. Para iterar sobre os elementos de um lista do tipo *List( que é o tipo gerado pelo pacote), é necessario usar o exemplo de iteração
// retirado da documentação oficial. um print normal retorna a estrutura interna da lista

func main() {
	fmt.Println("oi")
	openFile("Teste.txt")                                                             // ele cria se não achar o arquivo. o openfilipe abre o arquivo para ser feito alguma coisa mas ele não le em si o arquivo
	writeFile("YearofGoat.txt", "Nenhum conteudo profano aqui seu iconoclasta!!!!!!") // funcionou blz
	directoryAcessInfo(".")                                                           // da acesso a informação de todo diretorio especificado. Ele puxa o nome de todos os diretorios de todas as pastas

	// pacote error

	err := errors.New("Ocorreu um erro simples")
	fmt.Println(err)

	if err != nil {
		fmt.Println("Ocorreu um erro erroso na hora errada")
	}

	// exemplo bem simples de captura de erro. lembrando que nesse caso eu lancei o error atraves do new(errors.New). Achei o exemplo escolhido bem confuso. Mas tratativa de erro tem que
	// ver os padroes primeiro

	// pacote container list

	containerListExample()
}
