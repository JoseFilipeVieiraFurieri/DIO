# Agrupamente de seletores



- Para estilizar multiplas tags de uma vez

ex:

h1,p,ol {

}

- esse vai selecionar todas as h1, as p e as ol do documento.Importante separar por virgula porque senão ele entende como combinador por descedencia

.texto, h1, [id^="joao"] {

}

seleciona todas as tags de classe texto, todos os h1 e os ids que começam com joao

-pode ser usado para outros de seletores(classe, tipo, id, etc)

-outra maneira e usar desse jeito

p.texto {
    color: red;
}

dessa maneira ira estilizar as tags que sejam <p> e que tenham a classe .texto

outro exemplo:


a[href*='estadao'] {
    color: yellow;
}

* ira selecionar as tags <a> e que tenham no href a palavra estadao em qualquer parte do valor do atb


# combinador descendente

- se baseia no tipo de relação em que os seletores tem entre si

- por exemplo vc quer estilizar as tags que são filhas de uma determinada ou neta de outra

div section p {
    color: red;
}

nesse exemplo ira selecionar as tags que p que são filhas de section e netas de div(todas que cumprirem esses requisitos)

div section p#want {
    background-color: blue;
}

esse exemplo combina o agrupamento com a descendencia. Ele ira selecionar p que tem o id want e que seja filho de uma section e neta de uma div

- lembrando que dessa maneira tem que ser sempre respeitar a hirearquia pai-filho-neto

# Combinador filho

 -seleciona o filho imediato do seletor a esquerda

 ex : div.teste > p {
    color:brown;
}

 - a sintese é com elemento pai > filho direto

 - para entender o combinador filho e importante ficar atendo a estrutura

   
    <div class="teste">
        <span> Eu sou um texto jogado aqui</span>
        <p>Lista Aleatoria para testes</p>
        <ul>
            <li>Churros</li>
            <li>Bicarbonato de sodio</li>
            <li>Cone de transito</li>
        </ul>
        <p>Um paragrafo no fim da div</p>
        <span>
            <p>Um paragrafo selvagem apareceu!O que vc ira fazer?</p>
        </span>
    </div>

- No exemplo acima eu disse pra ele selecionar somente as tags p que são filhos diretos da div que possuem a classe teste, perceba que ele não selecionou a dentro do span, pq esse p e considerado neto da div ( filho de span). nâo da para ver nesse trecho mas a mais divs no css usado como exemplo

- Lembrando que vc pode combinar isso a torto e a direito, selecionar o p que seja decendente direto da div e decedente direto do span( para selecionar o neto)

div.teste > span > p {
    background-color: yellow;
}

- estou usando como exemplo seletores de tipo(tem um de classe tb) mas pode ser feito com qualquer tipo