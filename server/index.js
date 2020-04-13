const igdb = require('igdb-api-node').default;
const API_KEY = "fe9eb0de0102be7f3022ce3bb09802fc";
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


// ============== Fecthing games =====================================================
async function fetchGames(limit) {
  const response = await igdb(API_KEY)
        .fields(['name', 'genres', 'popularity'])
        .limit(parseInt(limit))
        .offset(100) // set this value to higher if you want to filter out more games
        .sort('name', 'desc')
        .request('/games');

  return response.data
}

app.get('/api/getGames', async (req,res) => {

    let limit = req.query.limit ? parseInt(req.query.limit) : 1;

    console.log(limit)
    var data = await fetchGames(limit)
    if(data){
      res.send(data);
    }
    console.log('Sent list of items');
});


// ============== Fecthing Genres =====================================================
async function fetchGenres() {
  const response = await igdb(API_KEY)
        .fields(['created_at', 'name', 'slug'])
        .limit(30)
        .request('/genres');

  return response.data
}

app.get('/api/getGenres', async (req,res) => {
  var data = await fetchGenres()
  console.log(data)
  if(data){
    res.send(data);
  }
  console.log('Sent list of items');
});








const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
