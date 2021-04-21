const { json } = require("express");
const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
const Pokedex = require('pokedex-promise-v2');

const pd = new Pokedex();

// pd.getPokemonByName('eevee') // with Promise
// .then(function(response) {
//   console.log(response);
// })
// .catch(function(error) {
//   console.log('There was an ERROR: ', error);
// });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const pokeName = req.body.pokeName;
  pd.getPokemonByName(pokeName).then(function(response){
    let ability1 = response.abilities[0].ability.name;
    let ability2 = response.abilities[1].ability.name
    console.log(ability1, ability2);
    res.sendFile();
  });



});

app.listen(3000, function () {
  console.log("server is running on 3000");
});
