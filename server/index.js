import express from "express";
import config from "dotenv/config";
import sequelize from "./database.js";
import * as models from "./models/models.js";
import cors from "cors";
import router from "./routes/index.js";
const PORT = process.env.PORT || 3501;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

/*
app.get("/", (req, res) => {
  console.log("work get");
  res.status(200).json({ message: " code is 200" });
});
*/

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
