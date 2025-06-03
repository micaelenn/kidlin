// external modules
import { app } from "./app/routes";

// internal modules
import { sequelize } from './config/database'
import dotenv from "dotenv"
dotenv.config({ path: __dirname+".env" });

// init sequelize
(async () => {
  await sequelize.sync({ alter: true });
})(); 

const PORT = process.env.PORT || 8080

app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
});