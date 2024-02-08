package main

import "fmt"

// Estruturas de Repetição

// For

/*
 for i := 0; i <= 10; i++ {
		fmt.Println(i)
	}
	// lembrando que o operador curto so pode ser usado dentro de escopo
	//for classico, nada de novo
*/

// if-else

/*
 if i%2 == 0 {
			fmt.Println("O numero é", i, "é par")
		} else {
			fmt.Println("O numero", i, "é impar")
   }
   - Parece com o do python não precisando do () nas condiçoes
*/

// switch
/*
switch expression {
case condition:

}

// switch assim como nas outras linguagens que eu tive contato so serve pra avaliar casos restritos porque não da para usar logica bolleana nele de forma direta

*/

// Não a while no go. Mas a um jeito de contarnar isso

/*
	for numeroTeste < 10 {
		fmt.Println(numeroTeste)
		numeroTeste++
	}

	- No entanto da para fazer o for desse jeito ai, que funciona basicamente como um while. lembrando sempre da condição de parada e do incremeto para evitar loops
	infinitos
*/

// Break e Continue

// tanto o break quanto o continue podem ser usados dentro de estruturas for em junção de if para evitar loops infinito

/*
 for {
	if x < 20 {
		print(x)
		x++
	} else {
		break
	}
 }

 - continue


*/

func main() {
	for i := 0; i <= 10; i++ {
		if i%2 == 0 {
			fmt.Println("O numero é", i, "é par")
		} else {
			fmt.Println("O numero", i, "é impar")
		}
	}

	// inicializador / condição/ incremento

	//gobyexemple for -> site com exemplos

	for horas := 0; horas <= 12; horas++ {
		fmt.Println("horas: ", horas)
		for min := 0; min <= 59; min++ {
			fmt.Printf("%d hora e %d minutos", horas, min)
			fmt.Print("\n") // o print f não pula linha então para contarnar isso pede ele pra imprimir uma quebra
		}
	}

	// tem uma saida enorme esse trecho de codigo
	// loop hieraquico ( so um loop dentro do outro)

	fruta := "morango"

	switch fruta {
	case "banana":
		fmt.Println("A banana da um bom shake")

	case "morango":
		fmt.Println("O morango do nordeste")

	}

	numeroTeste := 0

	for numeroTeste < 10 {
		fmt.Println(numeroTeste)
		numeroTeste++ // tem que somar se não vai ser sempre zero
	}

	x := 0

	for {
		if x < 20 {
			fmt.Println(x)
			x++
		} else {
			break
		}
	}

	// exemplo do uso do break

	for i := 0; i < 10; i++ {
		if i < 5 {
			continue
		}
		fmt.Println(i)

	}

	// o continue serve para quando vc quer pular um valor especifico no loop. Por exemplo ali ele vai continuar com o programa sem imprimir enquanto o i for menor que 5 ( so imprimindo
	// do 5 adiante)
}

//compendio de printf de %

/*
 %s -> string
 %d -> numero inteiro
*/

/*
println -> imprime e quebra a linha
printf -> imprime tudo em uma unica linha
*/
