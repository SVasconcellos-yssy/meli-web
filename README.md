# Projeto Mercado Livre Frontend

## Descrição

Este projeto é a interface de usuário para a aplicação Mercado Livre. Ele fornece uma busca de produtos, visualização dos resultados e detalhes dos produtos.

## Requisitos

- **Node.js**
- **npm** (ou **yarn**)

## Dependências

- **`@emotion/react`** e **`@emotion/styled`**: Para estilização.
- **`@mui/icons-material`**: Ícones do Material UI.
- **`@tanstack/react-query`**: Para gerenciamento de estado de dados.
- **`axios`**: Para fazer requisições HTTP.
- **`dotenv`**: Para carregar variáveis de ambiente.
- **`react`**: Biblioteca principal.
- **`react-dom`**: Para renderizar o React.
- **`react-helmet`**: Para gerenciamento de metadata do HTML.
- **`react-router-dom`**: Para roteamento.
- **`sass`**: Para estilização com SCSS.

## Scripts

- **start**: Inicia o servidor de desenvolvimento.
- **build**: Cria uma build de produção.
- **test**: Executa os testes.
- **eject**: Ejeita a configuração padrão do Create React App.

## Componentes

### Home

- Exibe a página inicial com os resultados da busca.

### SearchResultPage

- Exibe os resultados da busca baseados na query fornecida.

### ProductDetailPage

- Exibe os detalhes de um produto específico.

### ProductDetails

- Componente que exibe detalhes detalhados do produto, incluindo descrição e imagem.

# Cofiguração

1. Crie um arquivo .env na raiz do projeto e adicione a variável de ambiente:

    ```bash
    REACT_APP_API_URL=http://localhost:5000
    ```
2. Instale as dependências:

    ```bash
    npm install
    ```
3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```





