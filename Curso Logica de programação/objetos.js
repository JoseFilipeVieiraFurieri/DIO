// Objetos / JSON / Classes

const valorProduto = [
    {
    nome: "Carrinho de mão",
    categoria: "Ferramentas",
    preco: 32.0,
    marcasDisponiveis: ["Tigre", "Castor"]
    },
    {
    nome: "Patinho de Borracha",
    categoria: "Brinquedos",
    preco: 2.90,
    marcasDisponiveis: ["Estrela", "Plastic Dreams"]
    },
    {
    nome: "Polystation",
    categoria: "VideoGames",
    preco: 10.00,
    marcasDisponiveis: ["Quiling imports"]
    }
]

// acessando as props

console.log(valorProduto[0].nome);
console.log(valorProduto[1].categoria);
console.log(valorProduto[2].marcasDisponiveis[0]);
console.log(valorProduto[1].marcasDisponiveis[0]);

console.log(`o ${valorProduto[2].nome} é um produto de quinta categoria, perfeito pra voce que quer entrar no mundo dos games pagando pouco(somente ${valorProduto[2].preco}), mas sem
comprometer a diversão com mais de 10000 jogos na memoria. Cortesia da ${valorProduto[2].marcasDisponiveis[0]}`);

console.log(`O ${valorProduto[0].nome} , esta com o preço de ${valorProduto[0].preco} e esta disponivel nas marcas ${valorProduto[0].marcasDisponiveis.map((i) => i)}`);

// for in e for of

for(let index in valorProduto[0].marcasDisponiveis) {
    console.log(valorProduto[0].marcasDisponiveis[index]);
}

for( let index of valorProduto[0].marcasDisponiveis) {
    console.log(index);
}

// o for in retorna as chaves(no caso e so um array então a chave retorna um indice) e voce pode acessar is valores do jeito acima. Ja o for of traz os valores diretos 

// classes

class Pessoa {
    nome;
    idade;
    jogoFavorito;
    poderEspecial;

    constructor(name, idade, jogoFavorito, poderEspecial) {
        this.nome = name;
        this.idade = idade;
        this.jogoFavorito = jogoFavorito;
        this.poderEspecial = poderEspecial;

    }

    presentation() {
        return `Meu nome é ${this.nome}, tenho ${this.idade}. Meu jogo favorito é ${this.jogoFavorito} e se eu fosse um x-men meu poder seria ${this.poderEspecial}`
    }
}

const geraldo = new Pessoa("geraldo", 43, "Biriba", "Peido Fedorento Radiativo");

console.log(geraldo.presentation());

const zilmira = new Pessoa("Zilmira", 28, "Candy Crush", "Raio Galerizador")

console.log(zilmira.presentation());
