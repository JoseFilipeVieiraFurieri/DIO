package main

import (
	"bytes"
	"fmt"
	"io"
	"os"
	"strings"
	"unicode"
)

//Pacotes

// São as bibliotecas que tem funçoes especificas diversas. Servem para reutilzar codigos, como o fmt que tem diversas funoes relacionadas a imprimir alguma coisa no console ou o math
// que serve para lidar com operaçoes matematicas com maior precisão
// Servem para agilizar o processo de desenvovimento e entregar maior perfomance

// Pacote Strings ////////////////////////////////////////////////////////////////////////////////////////

// contains -> procura na string outra string especifica

// uso string.contains(string a ser procurada, palavra a ser procurada)

var nomeCompleto = "José Filipe Vieira Furieri"

func procurarString(mainText string, word string) bool {
	var verifyText = strings.Contains(mainText, word)
	return verifyText
}

func countString(mainString string, countword string) int {
	count := strings.Count(mainString, countword)
	return count
}

// retorna o numero de ocorencias da palavra ou substring no texto

/// Pacote Io e Bytes ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// writeString

func createText(text string, textName string) {
	texto, err := os.Create(textName)
	if err != nil {
		fmt.Println("Erro ao criar um arquivo:", err)
		return
	}

	defer texto.Close()

	_, err = io.WriteString(texto, text)
	if err != nil {
		fmt.Println("Erro ao escrever arquivo:", err)
		return
	}
}

/// pacote bytes /////////////////////////////////

// Traz funçoes para lidar com fatias. Os elementos são transformados em []bytes e sofrem algum processo( tipo lowercase, toTile, etc)

func lowerUnicode(text string) {
	str := []byte(text)
	tratamentoStr := bytes.ToLowerSpecial(unicode.AzeriCase, str)
	fmt.Println("Lowercase:", string(tratamentoStr))
}

// essa função cria uma fatia de bytes com o texto e depois aplica o ToLowerCaseSpecial, que aceita um padrão unicode e a string( ja com [bytes]) e depois imprime ela usando o fmt
// Tem que transformar em string pq é importante lembrar que as funçoes do byte transformam o codigo em unicode e se voltar o tratamentostr ele vai retornar um monte de numero(o unicode)

func main() {

	// string contains
	fmt.Println(procurarString(nomeCompleto, "Vieira"))
	fmt.Println(procurarString(nomeCompleto, "Fi")) // ele procura até pedaços de strings tambem
	fmt.Println(procurarString(nomeCompleto, "Doremi"))

	// string count

	fmt.Println(countString(nomeCompleto, "i"))

	io.WriteString(os.Stdout, "Bom dia"+"\n") // escreve a string no console

	// a função é diferente da fmt pq ela tem a intenção de escrever um arquivo( atraves do io.writer) é não so imprimir no console a tela

	createText("Teste teste testado pelo testante testado", "Teste.txt")

	// esse arquivo usa o os.create(para criar o arquivo de texto) e io write para escrever nele
	// existe na função um serie de tratamentos de erros para caso não consiga executar o procedimente de criar ou escrever( acho que é padrão do go)

	fmt.Printf("%s", bytes.Title([]byte("her royal highness"+"\n")))

	// a função bytes ela serve para transformar a string em uma fatia(fatia e um pedaço de um lista) de bytes e fazer uma maipulação, No caso esta retornando
	// a frase usada com os a primeira letra maiuscula(tipo um . Uppercase ( no caso o uppercase transformaria tudo mas é o que me vem na cabeça no momento))
	// seria a função Titulo (Title), mas importante ver que essa função esta em desuso

	lowerUnicode("EU AMO O JOGO DO TRIGRINHO. NÃO AQUELE DAS APOSTAS MAS O DA KELLOGS. PERSONAGEM SIMPATICO E CARISMATICO")

	// função que eu criei para transformar em lowercase utilizando o pacote bytes

}
