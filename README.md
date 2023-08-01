# contacts-api
A CONTACTC-API é uma api que gerencia os dados de seus contatos.
Nela é possível criar seu usuário e criar sua agenda de contatos.

É possível criar um contato contendo: nome completo, endereços, telefones e emails.
É possível criar mais de um campo para cada categoria, caso necessário.

## PARA RODAR A API:
1) Na pasta raiz do projeto, rode o comando `npm install`, para instalação dos pacotes necessários.
2) Configure o arquivo .env, seguindo o arquivo *.env.exemple*.
3) Após configurado o banco de dados e o arquivo .env, rode os comando na raiz do projeto utilizando o terminal/powershell:
    1) `npm run typeorm migration:generate -- -d src/data-source src/migrations/createtables`
    2) `npm run typeorm migration:run -- -d src/data-source`;
    
    Esses comandos realizarão a criação e configuração correta das tabelas do banco de dados.
3) Após configurado o arquivo o banco de dados local, rode a aplicação usando o comando `npm run dev`.
4) Com o servidor sendo executado, é possível usar a url base ***http://127.0.0.1:3000*** para fazer requisições.
