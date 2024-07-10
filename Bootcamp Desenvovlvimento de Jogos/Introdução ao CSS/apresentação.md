Fundamentos CSS

- Cascade style sheets - Folha de Estilo de Cascata

- css é responsavel por estilização e dimensionamento do documento HTML

- Atualmente se encontra no CSS3

- É uma linguagem de estilos , não e de marcação e não de programação

- Pode ser feito animaçoes, desenhos, filtros(filtros graficos(ex: desfoque) , não de conteudo), Contadores(so usando regras css mesmo)

- Da para fzer animaçoes so com o css e HTML - Não afeta rankeamento do google

## Formas de Declaração de CSS

# Propriedades e Valores

- Propriedade define uma caracteristica de um elemento HTML (cor, altura, largura, etc)

- valor determina o estado dessa propriedade

- propriedade : valor
  h2 {
    background: red;
    color: black;
  }

# Declarar

  - CSS inline
    Dentro das tags <h1 style="background: red;">
    - Não é recomendado o melhor a ser feito e por folha de estilo externas
    - Dificulta a leitura e polui o elemento html
    - So muda um elemento por vez , o que deixa tudo reduntante e de dificil manutenção
    - Tem prioridade sobre os outros estilos de declaração mas é muito pouco utilizado no dia a dia

  - CSS interno
    Coloca dentro da tag head do HTML, coloca os estilos na tag <style>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            background: red;
            color: white;
        }
    <style>
</head>
<body>
    
</body>
</html>


  - CSS externo

    - O mais utilizado
    - voce cria um arquivo externo com o mesmo nome do arquivo html ( teste.html, test.css)
    - Ideal colocar os arquivos css dentro da pasta assets/css
    - Deixa tudo organizado na minha opinião, css no css, html no html
    - tem que linkar a pagina de estilos com a pagina html
       <head>
        <link rel="stylesheet" href="assets/css/teste.css">
       <head>
        o rel tem que ter o valor stylesheet para o codigo reconhecer que é uma pagina de estilo
    - vc pode usar o mesmo arquivo css em diferentes -> maior reutilização de codigo, menor redundancia


## Depurando o css(debug)

 - O famoso Dev tools

 - Da pra ver todo o esqueleto do HTML

 - Ver as propriedades aplicadas, o layout(margin, border, posição dos elementos)
    da pra ver todos as props até aquelas aplicas por padrão pelo navegador
    voce pode filtrar por props

 - entre outras funçoes como requests sendo feitas, cookies, etc 

 - acesso com o segundo botão do mousse(inspect) ou ctrl+shif+I

 - Da pra alterar elementos no depurador
   ele não altera o documento , isso é so pra teste
   da para fazer isso tanto nas tags, quanto no css

- Da pra checar como a configuração da pagina fica em outros dispositivos