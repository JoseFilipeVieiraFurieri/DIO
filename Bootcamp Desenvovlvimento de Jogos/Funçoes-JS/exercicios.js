// exercicio 1 escreva meu nome

const sayMyname = (name) =>  `Your name is ${name}`;

// exercicio 2 verificar Idade

const verifyAge = (age) => {
    if (age >= 18) {
        return 'Maior de idade. Pode encher o bico'
    } else {
        return 'Pivetinho. Hora do leite com pera e ovamaltino'
    }
}

// Exercicio3 - partir função de calcular juros

const conversãoJuros = (percentualJuros) => {
    let conversaoJuros = percentualJuros / 100
    return conversaoJuros
}

// passa o juros para pora numero ( porcentagem para num)

const calcularJuros = (valorProduto , juros) => {
    let totalJuros = valorProduto * conversãoJuros(juros)
    return totalJuros
}


// calcula o quanto de juros total sofrido pelo produto

const valorFinalProdutoJuros = (valorProduto, Juros) => {
    const precoFinal = Number(calcularJuros(valorProduto, Juros)) + valorProduto
    return `O valor total do produto com o juros aplicado é ${precoFinal}`
}

const valorFinalProdutoDesconto = (valorProduto, Juros) => {
    const precoFinal = valorProduto - Number(calcularJuros(valorProduto, Juros)) 
    return `O valor total do produto com o juros aplicado é ${precoFinal}`
}

// Eu acabei dividindo tudo mas na função abaixo vc pode simplismento colocar valor - (valor * 1.1) no Juros ou  valor - (valor * 0.9) no desconto
// acobou que eles fizeram do mesmo jeito que eu( quase tudo mas vc pode colocar valor - (valor * (juros / 100)) kkkk mas o exemplo acima funciona, mas é preferivel encapsular tudo pq assim voce se quiser pode
// calcular os juros ou

const jurosPagamento = (valorProduto, formaPagamento) => {
    if ( formaPagamento == 1) {
        return valorFinalProdutoDesconto(valorProduto, 10)
    } else if ( formaPagamento == 2) {
        return valorFinalProdutoDesconto(valorProduto, 15)
    } else if (formaPagamento == 4){
        return valorFinalProdutoJuros(valorProduto, 10)
    }

    return `Condição não aplicavel a juros ou desconto`
}

/*
  1 = debito
  2 = credito
  3 = 2x na parcela
  4= acima de duas vezes
*/

// main
(function () {
    console.log(jurosPagamento(100, 4))
})();