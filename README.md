# HomeSupplies

O **HomeSupplies** é um Sistema de Controle de Estoque Residencial (Gerenciador de Despensas) que permitirá ao usuário cadastrar compras realizadas em um supermercado (ou outro estabelicimento) de um conjunto de produtos. Essas compras serão guardadas/estocadas em despensas residenciais. O Sistema também vai gerenciar os produtos abertos e em consumo na residência, guardando informações de validade e estoque.

Repositório para o **Sistema Home Supplies** para a Disciplina Teste de Software 2021.2.

# Documentação

[Documento de Visão](docs/doc-visao.md)

# Configuração do Ambiente de Desenvolvimento

Part 3: PostgreSQL and TypeORM

Install PostgreSQL and TypeORM

```bash
npm install typeorm reflect-metadata --save
npm install pg --save
```

Setup Postgres database server

# Setup Jest

```bash
npm i -D jest @types/jest
npm i -D ts-jest
npx ts-jest config:init
npm i -D faker @types/faker
```

Add `test` script in `package.json`. In test script call the `jest` command.

`package.json`
```json
  "scripts": {
    ...
    "test": "jest"
  },
```

Para gerar os relatórios de cobertura execute o comando:

```console
npm run test --coverage
```

O relatório estará no diretório `covarage/` chamado de `lcov.info` (local padrão se você não tiver modificado).