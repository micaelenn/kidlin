<div align="center">
  <img src="./kidlin.png" alt="Kidlin"/>
</div>

# kidlin

This is a browser extension project based on **Express** and **Vite** developed to improve task descriptions

## Requriements
- [Node.js](https://nodejs.org/en) - 20+
- [Plop](https://plopjs.com/) - Installed globally

## Structure

- `api`: an [Express](https://expressjs.com/pt-br/) API
- `extension`: a browser extension powered by [React](https://react.dev/) and [Vite](https://vitejs.dev/)

## Getting Started

### 1. Setup Database

To handle data storage from the api, create a new MySQL database named `kidlin_local_db`. Once the server starts, [Sequelize](https://sequelize.org/) will automatically create and configure the tables and columns.

### 2. Set environment variables

**API**

Create an `.env` file at the root of the **api** directory with:

```
DB_NAME="kidlin_local_db"
DB_USER=""
DB_PASSWORD=""
DB_HOST=""
```

**Extension**
Create an `.env` file at the root of the **extension** directory with:

```
API_URL="http://localhost:3000"
```

### 3. Install dependencies and running local serve

The project is a monorepo powered by [Turbo](https://turbo.build/). Use the following commands in the root directory to run it locally.

```
npm install
```
```
npm run dev
```
