const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
}

app.listen(port, function() {
  console.log("express server is running on port 3001 or env")
})
