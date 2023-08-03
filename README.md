# contacts-api
A CONTACTS-API é uma api na qual você pode guardar seus contatos e ter acesso a eles por meio de login de usuário previamente cadastrado(nome, emails, telefones, endereços).

É possível cadastrar seu usuário e sua agenda pessoal de contatos.

É possível criar um contato contendo: nome, endereços, telefones e emails.

A API suporta a criação de vários telefones, emails e endereços para o mesmo contato.

### TECNOLOGIAS USADAS:

- NodeJS
- Express
- TypeScript
- PostgreSQL
- TypeORM
- Zod
- Bcryptjs


## PARA RODAR A API:

### REQUISITOS:
Ter instalado Node.js, NPM ou yarn, postgres e DBeaver (opcional).

1) Certifique-se de ter instalado e configurado seu Postgres.
https://www.postgresql.org/

2) Com o postgres instalado e configurado conforme a documentação, crie um banco de dados pelo psql ou utilizando aplicação como o DBeaver.

3) Se usar o terminal com psql, utilize o comando:
`CREATE DATABASE "database_name"` (sem aspas).

4) Usando o terminal, faça o clone desse repositóio em uma pasta em seu computador.
`git clone link-do-repositorio`

5) Abra um terminal na pasta raiz do repositório clonado.

6) Então, rode o comando `npm install` para instalação dos pacotes necessários.

7) Em seguida, configure o arquivo .env, seguindo a estrutura do arquivo *.env.exemple*.

`DATABASE_URL="postgres://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>"
SECRET_KEY=""`

**USERNAME** é o nome do seu usuário na configuração do postgres.

**PASSWORD** é a senha definida também no postgres.

**HOST** é endereço local padrão da máquina, pois a API no localhost (http://127.0.0.1). No entanto, nao é preciso informá-lo no campo host, só a palavra "localhost" sem aspas já é suficiente.

**PORT** é a porta do postgres, por padrão é 5432.

**DABATASE** é o nome do banco de dados criado no passo 3.

O resultado é próximo ao do exemplo:
`DATABASE_URL="postgres://fulano:1234@localhost:5432/banco_de_dados_criado"`

A SECRET_KEY é uma string qualquer, uma palavra-chave que será usada nos hashs das senhas dos usuários.

8) Após configurado o banco de dados, o arquivo .env e instalados os pacotes, rode o comando na raiz do projeto utilizando o terminal/powershell/cmd:
    a) `npm run typeorm migration:run -- -d src/data-source`;
    
    Esse comando realiza a criação e configuração correta das tabelas e do banco de dados.

9) Após configurado o arquivo o banco de dados local, rode a aplicação usando o comando `npm run dev`.

10) Se tudo deu certo, voce verá a mensagem de que o servidor está sendo executado.

11) Agora é possível usar a url base ***http://127.0.0.1:3000*** para fazer requisições usando o insomnia ou até mesmo o aplicação front end e disponível também para uso.

***

## ENDPOINTS DA API:
A Api possui diversos endpoints. Vamos separalos por endpoints de usuário (cliente) e de contatos.
### USER:
- **POST** _/users_ Criação de um novo usuário
- **PATCH** _/users/id_ Edição de dados do usuário
- **DELETE** _/users/id_ Deleção do usuário
