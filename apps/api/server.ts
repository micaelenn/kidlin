// internal modules
import { sequelize } from './config/database'
import { app } from "./app/routes";
import { App } from "@/config/application"

// external modules
import colors from 'colors'
import dotenv from "dotenv"
dotenv.config({ path: __dirname+".env" });

const PORT = App.port || 8080
const DB_CONENCTION = App.connectDatabase

// init sequelize
if ( App.connectDatabase === "true") {
  (async () => {
    await sequelize.sync({ alter: true });
  })(); 
}

app.listen(PORT , () => {
  console.log(`Server Running On ${colors.cyan(`http://localhost:${PORT}`)} | Allow Database Connection: ${colors.cyan(`${DB_CONENCTION}`)}`);
});