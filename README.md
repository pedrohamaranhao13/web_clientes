# WebClientes

Aplicacao web em Angular para cadastro de clientes. A tela atual possui uma barra de navegacao e um formulario simples para cadastrar nome e CPF, enviando os dados para uma API local.

## Tecnologias

- Angular
- TypeScript
- Bootstrap
- Reactive Forms
- HttpClient

## Funcionalidades atuais

- Navbar com identificacao do sistema e botao de saida.
- Formulario de cadastro de cliente.
- Campos para nome e CPF.
- Envio dos dados para a API via requisicao `POST` com corpo JSON.
- Exibicao de mensagem de sucesso ou erro apos a resposta da API.
- Limpeza automatica do formulario apos cadastro bem-sucedido.

## Estrutura principal

```text
src/
  app/
    app.ts
    app.html
    app.config.ts
    components/
      navbar/
        navbar.ts
        navbar.html
        navbar.css
      cadastrar-cliente/
        cadastrar-cliente.ts
        cadastrar-cliente.html
        cadastrar-cliente.css
```

## Configuracao do projeto

O projeto usa o Angular CLI com Bootstrap configurado nos estilos e scripts globais:

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

## Como executar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Ou, se preferir usar o Angular CLI diretamente:

```bash
ng serve
```

Depois acesse:

```text
http://localhost:4200
```

## API utilizada

O cadastro envia uma requisicao para:

```text
POST http://localhost:8080/api/cliente/criar
```

Os dados sao enviados no corpo da requisicao em formato JSON:

- `nome`
- `cpf`

Exemplo da chamada feita pelo componente:

```ts
const request = {
  nome: this.formulario.value.nome!,
  cpf: this.formulario.value.cpf!
};

this.http.post('http://localhost:8080/api/cliente/criar', request, {
  responseType: 'text'
})
.subscribe({
  next: (resposta) => {
    alert(resposta);
    this.formulario.reset();
  },
  error: (e) => {
    alert('Erro: ' + e.error);
  }
});
```

Para o cadastro funcionar corretamente, a API backend precisa estar em execucao na porta `8080`.

## Componentes

### App

Componente raiz da aplicacao. Atualmente renderiza a navbar e o componente de cadastro de cliente.

### Navbar

Componente responsavel pela barra superior da aplicacao, usando classes do Bootstrap.

### CadastrarCliente

Componente responsavel pelo formulario de cadastro. Utiliza `FormGroup`, `FormControl` e `HttpClient` para capturar os dados, montar o objeto da requisicao e enviar para a API. Em caso de sucesso, exibe a resposta da API e limpa o formulario. Em caso de erro, exibe a mensagem retornada pelo backend.

## Build

Para gerar a versao de producao:

```bash
npm run build
```

Ou:

```bash
ng build
```

Os arquivos gerados ficarao na pasta de build configurada pelo Angular.
