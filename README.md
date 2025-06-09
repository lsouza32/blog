# API de Blog com Express e Prisma (SQLite)

Este é um projeto de API RESTful para um blog simples, construído com Node.js, Express e Prisma. Ele utiliza um banco de dados SQLite, tornando-o totalmente autocontido e portátil, sem a necessidade de instalar um software de banco de dados separado.

O projeto também inclui uma interface de controle básica em HTML e JavaScript para realizar todas as operações de CRUD diretamente do navegador.

## ✨ Funcionalidades

* **Criar** um post padrão com um clique.
* **Ler** (listar) todos os posts existentes no banco de dados.
* **Atualizar** o título e conteúdo de um post específico através de seu ID.
* **Deletar** um post específico através de seu ID.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução do JavaScript no servidor.
* **Express.js**: Framework minimalista para a criação do servidor e das rotas da API.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
* **Prisma ORM**: Ferramenta de acesso ao banco de dados, que facilita a comunicação com o SQLite.
* **SQLite**: Banco de dados relacional baseado em arquivo, sem necessidade de servidor.

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina local.

### Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas:
* [Node.js](https://nodejs.org/en/) (versão 18 ou superior recomendada)
* [NPM](https://www.npmjs.com/) (geralmente vem junto com o Node.js)
* [Git](https://git-scm.com/) (para clonar o repositório)

### Passo a Passo

1.  **Clone o repositório do GitHub:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd NOME_DA_PASTA_DO_REPOSITORIO
    ```

3.  **Instale todas as dependências do projeto:**
    Este comando irá baixar todos os pacotes necessários definidos no `package.json`.
    ```bash
    npm install
    ```

4.  **Crie e migre o banco de dados SQLite:**
    Este é um passo crucial. O comando abaixo irá ler o seu `schema.prisma` e criar o arquivo de banco de dados `prisma/dev.db` com a tabela `Post` já configurada.
    ```bash
    npx prisma migrate dev
    ```
    *(Na primeira vez, ele pode pedir um nome para a migração, você pode digitar "init" e pressionar Enter.)*

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Após executar o último comando, você verá uma mensagem no terminal indicando que o servidor está rodando:
`🚀 Servidor rodando em http://localhost:3000`

## 🎮 Como Usar

Com o servidor rodando, abra seu navegador de internet e acesse a seguinte URL:

`http://localhost:3000`

Você verá a interface de controle que criamos, onde poderá testar todas as funcionalidades do CRUD visualmente.

## 📋 Endpoints da API

Para referência, aqui estão os endpoints da API que foram construídos:

| Método | URL                  | Descrição                                         |
| :----- | :------------------- | :-------------------------------------------------- |
| `GET`  | `/api/posts`         | Lista todos os posts.                               |
| `POST` | `/api/posts`         | Cria um novo post com conteúdo padrão.              |
| `PUT`  | `/api/posts/:id`     | Atualiza o título e o conteúdo de um post específico. |
| `DELETE`| `/api/posts/:id`     | Deleta um post específico.                          |