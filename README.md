# Web Clientes

Aplicação Front-End desenvolvida com Angular 20 para gerenciamento de clientes, integrada à API REST **API Clientes** desenvolvida em Java Spring Boot.

A aplicação permite:

* Cadastrar clientes
* Consultar clientes
* Excluir clientes
* Buscar endereço automaticamente através do CEP utilizando a API ViaCEP
* Integração com API Spring Boot
* Interface responsiva utilizando Bootstrap 5

---

# Tecnologias Utilizadas

* Angular 20
* TypeScript
* Bootstrap 5
* Reactive Forms
* Angular Router
* HttpClient
* Signals
* ViaCEP

---

# Arquitetura do Projeto

```text
src
├── app
│
├── components
│   ├── navbar
│   │   ├── navbar.ts
│   │   ├── navbar.html
│   │   └── navbar.css
│   │
│   ├── cadastrar-cliente
│   │   ├── cadastrar-cliente.ts
│   │   ├── cadastrar-cliente.html
│   │   └── cadastrar-cliente.css
│   │
│   └── consultar-cliente
│       ├── consultar-cliente.ts
│       ├── consultar-cliente.html
│       └── consultar-cliente.css
│
├── app.config.ts
├── app.routes.ts
├── app.ts
├── app.html
└── styles.css
```

---

# Funcionalidades

## Cadastro de Clientes

Permite cadastrar:

* Nome
* CPF
* CEP
* Logradouro
* Número
* Complemento
* Bairro
* Cidade
* UF

Ao informar um CEP válido, os dados do endereço são preenchidos automaticamente através da API ViaCEP.

---

## Consulta de Clientes

Permite pesquisar clientes pelo nome.

Exibe:

* Nome
* CPF
* Lista de endereços

Também permite:

* Excluir cliente
* Atualizar automaticamente a listagem após exclusão

---

## Busca Automática de CEP

Integração com:

https://viacep.com.br

Exemplo:

```http
GET https://viacep.com.br/ws/23654080/json
```

Resposta:

```json
{
  "logradouro": "Rua Exemplo",
  "complemento": "",
  "bairro": "Centro",
  "localidade": "Rio de Janeiro",
  "uf": "RJ"
}
```

---

# Integração com a API Clientes

A aplicação consome a API Spring Boot.

Certifique-se de que a API esteja executando em:

```text
http://localhost:8081
```

---

## Endpoint de Cadastro

```http
POST http://localhost:8081/api/cliente/criar
```

Exemplo enviado pelo Angular:

```json
{
  "nome": "Pedro Maranhão",
  "cpf": "123.456.789-00",
  "enderecos": [
    {
      "logradouro": "Rua das Flores",
      "numero": "100",
      "complemento": "Casa",
      "bairro": "Centro",
      "cidade": "Rio de Janeiro",
      "uf": "RJ",
      "cep": "20000-000"
    }
  ]
}
```

---

## Endpoint de Consulta

```http
GET http://localhost:8081/api/cliente/consultar?nome=Pedro
```

---

## Endpoint de Exclusão

```http
DELETE http://localhost:8081/api/cliente/excluir/{id}
```

Exemplo:

```http
DELETE http://localhost:8081/api/cliente/excluir/1
```

---

# Configuração do Ambiente

## Instalar Node.js

Versão recomendada:

```text
Node.js 22+
```

Verificar:

```bash
node -v
npm -v
```

---

## Instalar Angular CLI

```bash
npm install -g @angular/cli
```

Verificar:

```bash
ng version
```

---

# Instalação do Projeto

## Clonar o repositório

```bash
git clone https://github.com/seu-usuario/web-clientes.git
```

---

## Entrar na pasta

```bash
cd web-clientes
```

---

## Instalar dependências

```bash
npm install
```

---

## Executar aplicação

```bash
ng serve
```

ou

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:4200
```

---

# Rotas da Aplicação

## Cadastro

```text
/pages/cadastrar-cliente
```

---

## Consulta

```text
/pages/consultar-cliente
```

---

## Página Inicial

Redirecionamento automático para:

```text
/pages/consultar-cliente
```

---

# Bootstrap

O projeto utiliza Bootstrap configurado no arquivo:

```json
angular.json
```

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

---

# Configuração de CORS

A API Spring Boot deve possuir a seguinte configuração:

```properties
cors.enable=http://localhost:4200
```

Classe responsável:

```java
CorsConfiguration
```

---

# Executando Front-End e Back-End

## Terminal 1

Executar API Spring Boot:

```bash
mvn spring-boot:run
```

API:

```text
http://localhost:8081
```

---

## Terminal 2

Executar Angular:

```bash
ng serve
```

Aplicação:

```text
http://localhost:4200
```

---

# Melhorias Futuras

* Login com JWT
* Controle de perfil de usuário
* Edição de clientes
* Cadastro de múltiplos endereços
* Paginação na consulta
* Filtro por CPF
* Máscaras para CPF e CEP
* Validação visual dos formulários
* Tema Dark Mode

---

# Autor

**Pedro Henrique Alves Maranhão**

Desenvolvido por **Pham Tecnologia**.

Tecnologias:

* Angular
* TypeScript
* Bootstrap
* Java Spring Boot
* PostgreSQL

E-mail: [pedro.maranhao@yahoo.com.br](mailto:pedro.maranhao@yahoo.com.br)
