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
app.use(bodyParser.text());


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
  if(data){
    res.send(data);
  }
  console.log('Sent list of items');
});


// ============== Fecthing 3 Trending Games for Slider =====================================================
async function fetchTredning() {
  const response = await igdb(API_KEY)
        .fields(['name', 'popularity', 'screenshots', 'release_dates'])
        .sort('release_dates', 'desc')
        .limit(3)
        .request('/games');

  return response.data
}

app.get('/api/getTrending', async (req,res) => {
  var data = await fetchTredning()

  if(data){
    res.send(data);
  }
  console.log('Sent list of items');
});

// ============== Get Game Screenshot by ID =====================================================
async function fetachGameScreenshot(ID) {
  const response = await igdb(API_KEY)
        .fields(['image_id', 'url', 'width'])
        .where(`game = ${ID}`)
        .request('/screenshots');
  return response.data
}

app.get('/api/getGameScreenshot', async (req,res) => {
  var data = await fetachGameScreenshot()

  if(data){
    res.send(data);
  }

  console.log('Sent list of items');
});




// ============== Search Game by Name =====================================================
async function fetachGameByName(name) {
  const response = await igdb(API_KEY)
        .fields(['name', 'popularity', 'screenshots', 'release_dates'])
        .search(name)
        .request('/games');

  return response.data
}

app.get('/api/searchGame', async (req,res) => {

  let name = req.query.name ? req.query.name : '';
  var data = await fetachGameByName(name)

  if(data){
    res.send(data);
  }
  console.log('Sent list of items');
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
