const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const axios = require("axios");
require("dotenv").config();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
}







app.get("/summonerName/:summonerName", (req, res) => {
  const userRequest = req.params.summonerName;
  const region = userRequest.substring(0, 3).toLowerCase().replace("_", "");
  const searchText = userRequest.substring(4);
  console.log("Your searchText is: " + searchText + " Your region is: " + region);

  axios.get("https://" + region + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + process.env.TOP_SECRET_API_KEY)
  .then(function (response) {
    res.json(response.data);
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

})

app.get("/by-summoner/:encryptedSummonerId", (req, res) => {
  const userRequest = req.params.encryptedSummonerId;
  const encryptedSummonerId = userRequest.substring(4);
  const region = userRequest.substring(0, 3).toLowerCase().replace("_", "");

  axios.get("https://" + region + ".api.riotgames.com/lol/spectator/v4/active-games/by-summoner/" + encryptedSummonerId + "?api_key=" + process.env.TOP_SECRET_API_KEY)
  .then(function (responseById) {
    res.json(responseById.data);
    console.log("We just sent the res.json");
    console.log(responseById.data);
  })
  .catch(function (error) {
    // handle error
    res.send("No bueno.");
    console.log(error);
  })
  .then(function () {
    // always executed
  });

})









app.listen(port, function() {
  console.log("express server is running on port 3001 or env")
})
