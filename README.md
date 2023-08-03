# contacts-api
A CONTACTS-API é uma api na qual você pode guardar seus contatos e ter acesso a eles por meio de login de usuário previamente cadastrado(nome, emails, telefones, endereços).

É possível cadastrar seu usuário e sua agenda pessoal de contatos.

É possível criar um contato contendo: nome, endereços, telefones e emails.

A API suporta a criação de vários telefones, emails e endereços para o mesmo contato.

## PARA RODAR A API:

### REQUISITOS:
Ter instalado Node.js, postgres e DBeaver (opcional).

1) Certifique-se de ter instalado e configurado seu Postgres.
   https://www.postgresql.org/

2) Com o postgres instalado e configurado conforme a documentação, crie um banco de dados pelo psql ou utilizando aplicação como o DBeaver.
   `CREATE DATABASE "database_name"` (sem aspas).

3) Usando o terminal, faça o clone desse repositóio em uma pasta em seu computador.
	`git clone link-do-repositorio`

4) Abra um terminal na pasta raiz do repositório clonado.

5) Então, rode o comando `npm install`, para instalação dos pacotes necessários.

6) Configure o arquivo .env, seguindo a estrutura do arquivo *.env.exemple*.

`DATABASE_URL="postgres://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>"
SECRET_KEY=""`
**USERNAME** é o nome do seu usuário na configuração do postgres.
**PASSWORD** é a senha definida também no postgres.
**HOST** é endereço local padrão da máquina (http://127.0.0.1), no entanto, nao é preciso informá-lo no campo host, só a palavra "localhost" já é suficiente.
**PORT** é a porta do postgres, por padrão é 5432.
**DABATASE** é o nome do banco de dados criado no passo 2.
O resultado é próximo ao do exemplo:
`DATABASE_URL="postgres://fulano:1234@localhost:5432/banco_de_dados_criado"`

7) Após configurado o banco de dados e o arquivo .env e instalado os pacotes, rode os comando na raiz do projeto utilizando o terminal/powershell:
    a) `npm run typeorm migration:generate -- -d src/data-source src/migrations/createtables`
    b) `npm run typeorm migration:run -- -d src/data-source`;
    
    Esses comandos realizarão a criação e configuração correta das tabelas do banco de dados.

8) Após configurado o arquivo o banco de dados local, rode a aplicação usando o comando `npm run dev`.
9) Se tudo deu certo, voce verá a mensagem de que o servidor está sendo executado.

10) Agora é possível usar a url base ***http://127.0.0.1:3000*** para fazer requisições usando o insomnia ou até mesmo o aplicação front end e disponível também para uso.
