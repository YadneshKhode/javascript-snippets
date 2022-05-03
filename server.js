const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors(() => {
    origin: "";
  })
);

app.get("/", (req, res) => {
  res.status(403).json({
    name: "yadnesh",
  });
});

app.listen(3000);
