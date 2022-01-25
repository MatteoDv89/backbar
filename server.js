const uploadImgRoute = require("./controller/uploadImg.route.js");
const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.listen(process.env.PORT || 5000, () =>
  console.log("listening on port", process.env.PORT)
);

app.use("/api", uploadImgRoute);
