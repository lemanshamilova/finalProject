const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes=require("./routes/auth.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//*ROUTES
app.use("/auth",authRoutes)

//*MONGOOSE SETUP

const PORT = 5050;
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName:"Dream_Nest",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Server PORT:", PORT));
  })
  .catch((err) => console.log(err, "did not connect"));
