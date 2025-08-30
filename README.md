<div align="center">
  <img src="./kidlin.png" alt="Kidlin"/>
</div>

# kidlin

This is a browser extension project based on **Express** and **Vite** developed to improve task descriptions

## Requirements
- [Node.js](https://nodejs.org/en) - 20+
- [Plop](https://plopjs.com/) - Installed globally

## Apps

On this repository, you can find the project structures under the "apps" folder:
- `api`: an [Express](https://expressjs.com/pt-br/) API
- `extension`: a browser extension powered by [React](https://react.dev/) and [Vite](https://vitejs.dev/)

## Getting Started

### 1. Setup Database

To handle data storage from the api, create a new MySQL database named `kidlin_local_db`. Once the server starts, [Sequelize](https://sequelize.org/) will automatically create and configure the tables and columns.

### 2. Set environment variables

**API**

Create an `.env` file at the root of the **api** directory with:

```
CONNECT_DATABASE="false"
OPENAI_API_KEY=""
```

**Extension**
Create an `.env` file at the root of the **extension** directory with:

```
VITE_API_URL="http://localhost:8080"
```

### 3. Install dependencies and running local serve

The project is a monorepo powered by [Turbo](https://turbo.build/). Use the following commands in the root directory to run it locally.

```
npm install
```
```
npm run dev
```

## Development Tool

To ensure consistency and speed up development, this project uses [Plop.js](https://plopjs.com/) as a code generator to create the initial structure for components and endpoints.

**1. Install plop globally**

```
$ npm install -g plop
```

**2. Generate structure**

Run the `plop` command at the root of the *api* or *extension* directory and set the name of the endpoint or component that you want to generate:

**api** 

*"What is the name of the entity?"* - new file structures for a new endpoint.

**extension**

*What is the component name?* - new file structures for a new widget component.

