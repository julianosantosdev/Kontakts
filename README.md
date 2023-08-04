# contacts-api
A CONTACTS-API é uma api na qual você pode guardar seus contatos e ter acesso a eles por meio de login de usuário previamente cadastrado(nome, emails, telefones, endereços).

É possível cadastrar seu usuário e sua agenda pessoal de contatos.

É possível criar um contato contendo: nome, endereços, telefones e emails.

A API suporta a criação de vários telefones, emails e endereços para o mesmo contato.
OBS: a feature de varios telefones, email e endereços não está disponível na aplicação front-end.

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
A Api possui diversos endpoints. Vamos separá-los por endpoints de usuário (cliente) e de contatos.
### USER:

- **POST** _/users_ --- STATUS 201 --- Criação de um novo usuário.
```json
{
	"fullName": "Bidu",
	"email": "bidu@mail.com",
	"password": "1234",
	"phone": "123456789"
}
```
RETORNO:
```json
{
	"id": 1,
	"fullName": "Bidu",
	"email": "bidu@mail.com",
	"phone": "123456789",
	"createdAt": "2023-08-02",
	"updatedAt": "2023-08-02",
	"deletedAt": null
}
```

- **PATCH** _/users/id_ --- STATUS 200 --- Edição de dados do usuário
```json
{
	"fullName": "Biduzão",
	"email": "biduzao@mail.com",
	"password": "1234",
	"phone": "987654321"
}
```
RETORNO:
```json
{
        "id": 1,
	"fullName": "Biduzão",
	"email": "biduzao@mail.com",
	"phone": "987654321"
	"createdAt": "2023-08-02",
	"updatedAt": "2023-08-02",
	"deletedAt": null
}
```

<br>

- **DELETE** _/users/id_ --- STATUS 204 --- Deleção do usuário.
REQUISIÇÃO:
```
"Não possui corpo da requisição"
```
RETORNO:
```json
"É retornado somente o STATUS 204, confirmando que o usuário foi deletado."
```

<br>

- **POST** _/login_ --- STATUS 200 --- Login do usuário cadastrado.
REQUISIÇÃO:
```
{
	"email": "biduzao@mail.com",
	"password": "1234"
}
```
RETORNO:
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}

```

<br>

- **GET** _/users_ --- STATUS 200 --- Retorna os dados do usuário logado (envio de token).

REQUISIÇÃO:
```
"Não possui corpo da requisição". NECESSÁRIO ENVIAR TOKEN.
```
RETORNO:
```json
{
        "id": 1,
	"fullName": "Biduzão",
	"email": "biduzao@mail.com",
	"phone": "987654321"
	"createdAt": "2023-08-02",
	"updatedAt": "2023-08-02",
	"deletedAt": null
}
```

<br>

### CONTATOS:
<br>

**Todas as rotas abaixo precisam de autenticação.**

<br>

- **POST** _/contacts_ --- STATUS 201 --- Criação de novo contado.
```json
{
	"fullName": "Doguinho rabicó",
	"email": "rabico@mail.com",
	"phone": "147258369",
	"address": {
		"street": "Rua 01",
		"number": "01",
		"city": "Cidade 01",
		"state": "SP"
	}
}
```
RETORNO:
```json
{
	"id": 1,
	"createdAt": "2023-08-03",
	"fullName": {
		"id": 1,
		"fullName": "Totó",
		"createdAt": "2023-08-03"
	},
	"address": {
		"id": 1,
		"street": "Rua 01",
		"number": "01",
		"city": "Cidade 01",
		"state": "SP",
		"createdAt": "2023-08-03",
		"updatedAt": "2023-08-03"
	},
	"phone": {
		"id": 1,
		"phone": "11111111111",
		"createdAt": "2023-08-03"
	},
	"email": {
		"id": 1,
		"email": "toto@mail.com",
		"createdAt": "2023-08-03"
	}
}
```

<br>

- **GET** _/contacts_ --- STATUS 200 --- Retorna a lista de usuários criados pelo usuário (cliente).

```json
[
	{
		"id": 1,
		"createdAt": "2023-08-01",
		"fullName": {
			"id": 1,
			"fullName": "Doguinho da praça",
			"createdAt": "2023-08-01"
		},
		"emails": [
			{
				"id": 17,
				"email": "doguindapraca@mail.com",
				"createdAt": "2023-08-01"
			},
{
				"id": 18,
				"email": "doguindapraca2@mail.com",
				"createdAt": "2023-08-01"
			}
		],
		"phones": [
			{
				"id": 17,
				"phone": "789456123",
				"createdAt": "2023-08-01"
			},
{
				"id": 24,
				"phone": "78459685423",
				"createdAt": "2023-08-01"
			}
		],
		"addresses": [
			{
				"id": 1,
				"street": "Rua da praça",
				"number": "01",
				"city": "Cidade 01",
				"state": "SP",
				"createdAt": "2023-08-01",
				"updatedAt": "2023-08-01"
			}
		]
	},
    {
		"id": 2,
		"createdAt": "2023-08-01",
		"fullName": {
			"id": 2,
			"fullName": "Humano da ração",
			"createdAt": "2023-08-01"
		},
		"emails": [
			{
				"id": 17,
				"email": "humano@mail.com",
				"createdAt": "2023-08-01"
			}
		],
		"phones": [
			{
				"id": 17,
				"phone": "753159852",
				"createdAt": "2023-08-01"
			}
		],
		"addresses": [
			{
				"id": 2,
				"street": "Rua 01",
				"number": "01",
				"city": "Cidade 01",
				"state": "SP",
				"createdAt": "2023-08-01",
				"updatedAt": "2023-08-01"
			}
		]
	}
]
```

<br>


- **DELETE** _/contacts/id_ --- STATUS 204 --- Deleção um contato.
```json
"É retornado somente o STATUS 204, confirmando que o usuário foi deletado."
```

<br>


Como a CONTACTS_API permite cadastrar mais de um email, telefone e endereço do usuário, **as rotas para a criação desses campos são próprias e específicas**:
**Todas as rotas necessitam autenticação**
### NOME:
Não é possível deltar um nome de contato, para isso atualize-o ou delete-o. Nome de contato é um campo obrigatório no banco de dados, nao pode ser nulo nem vazio.

<br>

- **PATCH** _/contacts/fullname/id_ --- STATUS 200 --- Deleção um contato.
Não é possível atualizar nome de contato que não seja do próprio usuário. Verificação interna da API por meio do ID do nome.
REQUISIÇÃO:
```json
{
	"fullName": "Fubá"
}
```
RESPOSTA:
```json
{
	"id": 100,
	"fullName": "Fubá",
	"createdAt": "2023-08-03"
}

```

<br>

### EMAIL:
- **POST** _/contacts/id/email_ --- STATUS 201 --- Criação um novo email para o contato de ID informado.
REQUISIÇÃO:
```json
{
	"email": "doguinhodapadaria@mail.com"
}

```
RESPOSTA:
```json
{
	"id": 37,
	"email": "doguinhodapadaria@mail.com",
	"createdAt": "2023-08-03"
}
```

<br>

- **PATCH** _/contacts/email/id_ --- STATUS 200 --- Edição do email de id informado.
REQUISIÇÃO:
```json
{
		"email": "doguin2@mail.com"
}
```
RESPOSTA:
```json
{
	"id": 45,
	"email": "doguin2@mail.com",
	"createdAt": "2023-08-03"
}
```

<br>

- **DELETE** _/contacts/email/id_ --- STATUS 204 --- Deleção um contato.
REQUISIÇÃO:
```
"Não possui corpo da requisição"
```
RETORNO:
```json
"É retornado somente o STATUS 204, confirmando que o email foi deletado."
```

<br>

### ENDEREÇO:

- **POST** _/contacts/id/address_ --- STATUS 201 --- Cria um novo endereço para o contato de ID informado.
REQUISIÇÃO:
```json
{
		"street": "Rua do poste",
		"number": "03",
		"city": "Nova Dog",
		"state": "DG"
}
```
RESPOSTA:
```json
{
	"id": 35,
	"street": "Rua do poste",
	"number": "03",
	"city": "Nova Dog",
	"state": "DG",
	"createdAt": "2023-08-03",
	"updatedAt": "2023-08-03",
	"contact": {
		"id": 34,
		"createdAt": "2023-08-03"
	}
}

```

<br>

- **PATCH** _/contacts/address/id_ --- STATUS 204 --- Atualiza o endereço de ID informado.
REQUISIÇÃO:
```json
{
	"state": "MG"
}

```
RESPOSTA:
```json
{
	"id": 35,
	"street": "Rua 03 NOVA",
	"number": "03",
	"city": "Cidade 03",
	"state": "MG",
	"createdAt": "2023-08-03",
	"updatedAt": "2023-08-03",
	"contact": {
		"id": 34,
		"createdAt": "2023-08-03"
	}
}

```

<br>


- **DELETE** _/contacts/address/id_ --- STATUS 204 --- Deleção um endereço.
REQUISIÇÃO:
```
"Não possui corpo da requisição"
```

RETORNO:
```json
"É retornado somente o STATUS 204, confirmando que o endereço foi deletado."
```

<br>

### TELEFONE:

- **POST** _/contacts/id/phone_ --- STATUS 204 --- Criação de um novo telefone para um determinado contato de ID.
REQUISIÇÃO:
```json
{
"phone": "88 88888-8888"
}
```
RESPOSTA:
```json
{
	"id": 35,
	"phone": "88 88888-8888",
	"createdAt": "2023-08-03",
	"contact": {
		"id": 34,
		"createdAt": "2023-08-03"
	}
}
```

<br>


- **PATCH** _/contacts/phone/id --- STATUS 204 --- Editação de um telefone de ID informado.
REQUISIÇÃO:
```json
{
	"phone": "99 99999-9999"
}
```
RESPOSTA:
```json
{
	"id": 35,
	"phone": "99 99999-9999",
	"createdAt": "2023-08-03"
}
```

<br>


- **DELETE** _/contacts/phone/id_ --- STATUS 204 --- Deleção um contato.
REQUISIÇÃO:
```
"Não possui corpo da requisição"
```

RETORNO:
```json
"É retornado somente o STATUS 204, confirmando que o telefone de ID foi deletado."
```


