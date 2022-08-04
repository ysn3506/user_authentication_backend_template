const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const bp = require("body-parser");

require("dotenv/config")
const userRoutes = require( "../routes/userRoutes");
const { errorHandler, notFound } = require("../middleware/errorMiddleware");

app.use(cors());
app.use(bp.json());
// Error Handling middlewares



app.use("/api/users", userRoutes);


app.get("/", async (req, res) => {
  res.send("Server is working");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  }
);




const startServer = () => {
    app.listen(process.env.PORT || 8080, console.log("Server is running"));
 
};



module.exports.startServer = startServer;




