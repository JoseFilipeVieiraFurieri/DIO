package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"strconv"
)

// JSON - Javascript Object Notation[
// formato padrão para enviar e receber informaçoes
// mais usado atualmente

// cria uma instrutura para receber o Json

type Users struct {
	Usuarios []Usuario `json: "users"`
}

type Usuario struct {
	Nome         string         `json: "Nome"`
	Sobrenome    string         `json: "Sobrenome"`
	Idade        int            `json: "Idade"`
	Dominio      string         `json: "Idade"`
	SiteFavorito SitesFavoritos `json: "SiteFavoritos"`
}

type SitesFavoritos struct {
	Site1 string `json: "nãointendo"`
	Site2 string `json: "redefama"`
}

func main() {

	// codigo abaixo e so para abrir o JSON

	JsonFile, err := os.Open("src/JSON/users.json") // utiliza a função os para abrir o Json
	if err != nil {                                 // tratamento basico de erro
		log.Fatal(err)

	}

	fmt.Println("Arquivo aberto com sucesso") // em caso de sucesso

	defer JsonFile.Close()

	byteValue, _ := ioutil.ReadAll(JsonFile) // usa o pacote readll para ler o JsonFIle e atribui isso ao byteValue

	var usuarios2 Users

	json.Unmarshal(byteValue, &usuarios2) // descompacata e le o arquivo indicado

	fmt.Println(byteValue)

	fmt.Println(usuarios2)

	for i := 0; i < len(usuarios2.Usuarios); i++ {
		fmt.Println("Usuario Nome Completo:", usuarios2.Usuarios[i].Nome, usuarios2.Usuarios[i].Sobrenome)
		fmt.Println("Usuario Idade:", strconv.Itoa(usuarios2.Usuarios[i].Idade)) // p strconv e para trabalhar com string dentro do json
		fmt.Println("Usuario Dominio:", usuarios2.Usuarios[i].Dominio)
	}

	/*
	  explicando : primeiro o caso é mais simples do que parece, o processo todo e para ler o arquivo JSON so é meio verboso para ser sincero
	  As passos estão descritos mas em resumo foi criado um estrutura Users para receber a lista de users( são dois)
	  depois foi 2 outras estuturas uma tipando o conteudo de um usuario e a outro do subarray site favoritos
	  ai abre o arquivo, usa o readall do ioutil para ler o arquivo e armazenar no byteValue depois descompata ele é armazena ele em uma variavel (usuarios2) que é um objeto contento um array com as informaçoes de user
	  Lembrando que isso em JS pq em go não tem objetos. ai vc itera sobre essa lista e imprime os valores do jeito que lhe for conveniente
	*/
}


## Aula server 1

package main

import (
	"bufio"
	"fmt"
	"net/http" // pacote para criar os servidores http
)

// Servidor - envio e recebimento de informaçoes

// Alguns tipos de server

/*
 - De aplicação
 - Databases
 - arquivos
 - email
 - midia
 - FTP -> recebedor - remetente baseado no protocolo FTP(File transfer Protocol)
 - Proxy -> servidor intermediario entre o usar é a net
 - Web -> Seu pc com a net
*/

// HTTP ( Hyper Text Transfer Protocol)

// Servidor estatico

// Um servidor estatico e aquele que armazena seus dados e envia eles como estão para o usuario que solicita. Creio que seja um servidor que não faça por si so alteraçoes nos dados
// recebidos. Como so trabalhei com servidores estaticos até agora

// Servidor server -> presta algum serviço ao user

// func manipuladoras -> responsavel por manipular e responder requestes, enviar informaçoes ao usuario

func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Ola\n")
}

// retorna uma reposta na pagina para o user

func headers(w http.ResponseWriter, req *http.Request) {
	for nome, headers := range req.Header {
		for _, c := range headers {
			fmt.Fprintf(w, "%v: %v\n", nome, c)
		}
	}
}

// serve para ler os cabeçalhos( header) das requests e escoar para o body. Lembrando que a estrutura de uma solitação tem o header e o body ( que eu me lembro). A função creio que
// seja padrão mas não tenho como confirmar

func main() {

	// Servidor Service

	// Pelo que eu entendi essa parte associa as rotas com as funçoes de manipulação
	// O HandleFunc espera uma rota e uma função como paraametros
	//http.HandleFunc("/ola", hello)
	//http.HandleFunc("/header", headers)

	//http.ListenAndServe(":8090", nil)

	// essa função acima cria um server para disponibilizar as informaçoes( no localhost). Nil e geralmente usado como handler padrão( segundo a documentação)
	// o acesso é o padrão para servidores locais atraves do http://localhost:porta/nomeRota. Bem legal
	// a primeira rota so retorna um ola, a segunda um monte de informação do header da mensagem

	//Servidor Client

	// são os servidores relacionados a request mesmo. Ou seja aqui estamos simulando uma solitação como client ao um server abaixo é uma solicitação ao site go example do tipo
	// get. Lembrar do CRUD ( create, request(get), update e delete)

	resp, err := http.Get("https://gobyexample.com")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	fmt.Println("Connection state: ", resp.Status)

	// esta da resposta do servidor. o normal de sucesso é os da classe 200

	scanner := bufio.NewScanner(resp.Body)
	for i := 0; scanner.Scan() && i < 5; i++ {
		fmt.Println(scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		panic(err)
	}

	// o err e o tratamento padrão de erro em requests, requests podem dar erro dos mais variaveis tipo ( são os famosos 400 , 300, etc)
	// o defer creio que seja para fechar a requisição depois que ele for feita, senão a requisição fica aberta
	// o scanner le as primeiras cinco linhas de codigo do site que foi feita a requisição. Creio que deva vir alguma leitura do html do site
	// sim , vem literalmente o html do site as cinco linhas so vão até o title do head, mas e so mudar a parte do scanner pra mais linhas
	// embaixo é o tratamento de erro do scanner

	// alguns exemplos de response 200 ok
	// 201 Criado
	//202 aceito
	//203 não-autorizado
	//204 nenhum conteudo
	// 205 reset
	// 206 conteudo parcial
	// 207 status multi

	// Não a menor necessidade de decorrar. No inicio voce vai lidar muito com 200 e geralmente sempre vem a mensagem do status junto

	// outros comuns são o 404(not found) ou o 500( erro de servidor)
}


## Aula server 2

package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("src/Static-Server/static-server(html)/static-server-course.html"))
	http.Handle("/", fs)
	log.Print("Listening on: 3000", nil)
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal(err)
	}
}

// cria uma rota baseada no html fonecido no pasta especificada
// a Handle (função minupuladora) ira criar  a rota e assosiar com o fs( que tem o html)
// o log.Print e para escutar a conexão com a parta especificada ( no caso a 3000)
// e o ListenANdServe cria o servidor. o resto e tratamento de erro
