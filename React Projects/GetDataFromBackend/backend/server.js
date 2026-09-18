const express = require("express");
const cors = require("cors");

const connectDB = require("./dbconnection");
const userRoutes = require("./router");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

app.listen(5000, () => {
    console.log("Backend Server is running on PORT:5000");
});