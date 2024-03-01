const express = require("express");
const chats = require("./data");
const connectDB = require("./config/db");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

connectDB();
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use(express.json());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
