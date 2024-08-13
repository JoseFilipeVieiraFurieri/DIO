# Prisma Teste

## Links
[Documentação V8](https://docs.v8sistema.com)

## Rotas:

1. Deve haver uma rota para realizar a consulta de saldo *FGTS*;
    1. A rota deve receber um **CPF** para a consulta;
    2. Deve ser possível escolher uma das tabelas cadastradas no *DB*;
    3. A rota deve retornar um erro caso não seja um **CPF** válido;
    4. Deve retornar uma mensagem informando que o **CPF** informando que não tem saldo disponível;
    5. Deve retornar uma mensagem informando que o banco não tem autorização de consulta;
    6. Deve retornar o valor e o provedor que possuí saldo e autorização.
2. Deve ter uma rota para buscar no banco as tabelas disponíveis;
    1. Deve mostrar todas as tabelas cadastradas no banco;
    2. Deve mostrar o nome e o *ID* da tabela;
3. Deve ter uma rota para atualizar uma tabela;
    1. Deve ser possível atualizar o nome da tabela pelo seu *ID*;
    2. Deve retornar o nome atualizado e o *ID* da tabela.
4. Deve ser possível buscar por consultas já realizadas no *DB*;
    1. Deve ser possível buscar uma pelo *ID*;
    2. Deve ser possível buscar pelo **CPF**;
    3. Deve ser possível buscar por data;
    4. Deve retornar todos os dados relevantes.

---
