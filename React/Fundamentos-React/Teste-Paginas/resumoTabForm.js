const textbox = document.getElementsByClassName("teste-flex");
// nesse caso ele retorna uma htmlCollection, isso faz diferença em relação ao metodos que podem ser aplicados( pode retornar tb um nodeList)

const rowTest = document.getElementById("row");

// o id so retorna pq o id deve ser unico a cada elemento

const rowList = document.querySelectorAll("#row");

// o query selector retorna um nodeList, o nodelist não reflete alteraçoes feitas no dom ( no caso de por exemplo ser feita uma alteração
// por meio do codigo)

// pega o primeiro com o id row

// tem o por tag(getElementsByTagName)

console.log(textbox);

console.log(rowTest);

console.log(rowList);

// esses são exemplos basicos de manipulação mais outros muitos usados são os creatElement, appendChild ( que me vem na cabeça)

// são muitos, decorar é besteira ( consultar e usar conforme a necessidade e o importante)

// os seletores retornam um array no entendo e importante lembrar que os metodos que cada um aceitam e diferente( tenho que testar 
// mas pelo que me lembro nem tudo que funciona no nodelist funciona no htmlCollection)

// pode ser colocados eventos mas eu acho que foge um pouco do escopo da aula

// e possivel combinar queryselector["input[name='email']"] e mais um monte
