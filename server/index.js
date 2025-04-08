import express from "express";
import config from "dotenv/config";
import sequelize from "./database.js";

const PORT = process.env.PORT || 3501;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Good start ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
