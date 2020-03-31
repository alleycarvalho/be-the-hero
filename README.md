<h1 align="center">
    <img src=".github/logo.svg" width="200px" alt="Be The Hero" />
</h1>

<h3 align="center">
  Semana OmniStack 11.0
</h3>

<blockquote align="center">“A determinação de hoje é o sucesso de amanhã.”</blockquote>

<p align="center">
  <img src="https://img.shields.io/github/languages/count/alleycarvalho/be-the-hero?color=%2304D361" alt="GitHub language count">

  <img src="https://img.shields.io/badge/license-MIT-%2304D361" alt="License">

  <a href="https://github.com/alleycarvalho/be-the-hero/stargazers">
    <img src="https://img.shields.io/github/stars/alleycarvalho/be-the-hero?style=social" alt="Stargazers">
  </a>
</p>

## :rocket: Sobre o projeto


**Be The Hero**: Uma aplicação para divulgar casos de ongs.

<space><br><space>

## :page_with_curl: Requisitos

1. Instalação do [Node](https://nodejs.org/pt-br/)
2. Instalação do [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable): comandos gerais
3. Instalação do [Lerna](https://lerna.js.org/): comandos do monorepo
4. Instalação do aplicativo [Expo](https://expo.io/learn) no smartphone:
    - [Android App](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
    - [iOS App](https://apps.apple.com/app/apple-store/id982107779)

<space><br><space>

## :computer: Testar a aplicação

```shell
# Clonar o projeto Be the Hero:
git clone git@github.com:alleycarvalho/be-the-hero.git

# Acessar o diretório do projeto Be the Hero:
cd be-the-hero

# Executar aplicação:
yarn dev:monorepo
```

<space><br><space>

## :mortar_board: Ferramentas e conceitos utilizados

#### :desktop_computer: [[BACKEND](packages/backend)]:

- Framework [Express](https://github.com/facebook/create-react-app)
- Reiniciar servidor automaticamente com [Nodemon](https://github.com/remy/nodemon/)
- Banco de Dados: [SQLite](https://github.com/mapbox/node-sqlite3)
- SQL Query Builder: [Knex](http://knexjs.org/)
- Migrations: Controle de versão para banco de dados
- Paginação de registros
- Validações com [celebrate](https://github.com/arb/celebrate)
- Testes automatizados com [jest](https://jestjs.io/)
- Disponibilização de acesso externo com [cors](https://github.com/expressjs/cors)

#### :computer: [[FRONTEND](packages/frontend)]:

- Utilização do [react](https://pt-br.reactjs.org/) iniciado com [create-react-app](https://expressjs.com/pt-br/)
- Utilização de [hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) do [react](https://pt-br.reactjs.org/)
- Rotas com [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- Ícones com [react-icons](https://react-icons.netlify.com/#/)
- Formatação de dados com [Intl](https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md)
- Mensagens persoanlizadas com [react-toastify](https://fkhadra.github.io/react-toastify/)
- Testes automatizados com [jest](https://jestjs.io/)
- Integração com api utilizando [axios](https://github.com/axios/axios)

#### :vibration_mode: [[MOBILE](packages/mobile)]:

- Utilização do [react-native](https://reactnative.dev/) iniciado com [expo](https://expo.io/)
- Utilização de [hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) do [react](https://pt-br.reactjs.org/)
- Navegação com [react-navigation](https://reactnavigation.org/)
- Ícones com [@expo/vector-icons](https://docs.expo.io/versions/latest/guides/icons/)
- Constantes com [expo-constants](https://docs.expo.io/versions/latest/sdk/constants/)
- Composição de e-mail com [expo-mail-composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
- Formatação de dados com [Intl](https://github.com/andyearnshaw/Intl.js/)
- Rolagem infinita dos dados paginados
- Loading personalizado com [activityindicator](https://reactnative.dev/docs/activityindicator)
- Testes automatizados com [jest](https://jestjs.io/)
- Integração com api utilizando [axios](https://github.com/axios/axios)

<space><br><space>
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Projeto prático desenvolvido por <b>[Alley M. Carvalho](https://github.com/alleycarvalho)</b>
