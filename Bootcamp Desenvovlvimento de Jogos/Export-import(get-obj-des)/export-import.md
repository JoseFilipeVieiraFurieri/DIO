# export / import

 - Por questão de organização , deixar o codigo separado por responsabilidade é essencial
 - Cada função deve ter no maximo uma responsabilidade
 - forma basica
   -No arquivo de exportação
    module.exports = { func1, func2}
   -No de importação
     const func = require('caminho da pasta de utilizada')
   - obs: com o uso de react fica mais facil
     basta fazer:
     - export
     - import '' from ''