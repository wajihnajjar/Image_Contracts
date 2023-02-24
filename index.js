const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contractTypeRoutes = require("./routes/contractType.routes");

const app = express();

const PORT = process.env.PORT || 8080;
  app.listen(PORT, function () {
  console.log(`Server running on ${PORT}`);
});
app.use(cors({ origin: "*" })); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded(
    { limit: "500mb", 
  parameterLimit: 100000,
  extended: true 
  }));
  app.use("/uploads", express.static("./uploads"));

app.get("/", (req, res) => {
    res.send("Welcome To Image Server");
  });

 // app.use("/api/contractType", contractTypeRoutes);
