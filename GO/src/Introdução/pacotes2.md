package main

import (
	"fmt"
	"log"
	"os"
)

//pacote Os

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

func main() {
	fmt.Println("oi")
	openFile("Teste.txt")                                                             // ele cria se não achar o arquivo. o openfilipe abre o arquivo para ser feito alguma coisa mas ele não le em si o arquivo
	writeFile("YearofGoat.txt", "Nenhum conteudo profano aqui seu iconoclasta!!!!!!") // funcionou blz
}