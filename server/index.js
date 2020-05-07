const igdb = require('igdb-api-node').default;
const API_KEY = "fe9eb0de0102be7f3022ce3bb09802fc";
const API_URL = 'http://localhost:5000/api';
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
});


// ============== Fecthing 10 Trending Games for Slider =====================================================
async function fetchTredning(platformID) {
  var x = new Date();
  x.setDate(1);
  x.setMonth(x.getMonth()-1);
  unixTimeStampLastMonth = (x.getTime() / 1000).toFixed(0)

  const response = await igdb(API_KEY)
        .fields(['name', 'cover', 'first_release_date', 'platforms'])
        .sort('popularity', 'desc')
        .where(`first_release_date > ${unixTimeStampLastMonth} & platforms = ${platformID}`)
        .limit(7)
        .request('/games');

    const promises = response.data.map(async data =>{
          if(data){
            id = data.cover
            const res = await axios.get(`${API_URL}/getGameCoverByCoverId/?id=${id}`)
            return res.data[res.data.length-1].image_id
          }else{
            return " "
          }
        } )
      
        const results = await Promise.all(promises)
        const modifiedData = response.data.map((data, index) => {
          image_id = results[index]
          return{
            ...data,
            image_id
          }
        })
        
        //return the modified data with cover url 
        return modifiedData
}

app.get('/api/getTrending', async (req,res) => {
  let id = req.query.id ? parseInt(req.query.id) : 0;
  var data = await fetchTredning(id)

  if(data){
    res.send(data);
  }
});

// ============== Get Game Cover by Cover ID =====================================================
async function fetachGameCoverByCoverId(ID) {
  const response = await igdb(API_KEY)
        .fields(['image_id', 'url', 'width'])
        .where(`id = ${ID}`)
        .request('/covers');
  return response.data
}

app.get('/api/getGameCoverByCoverId/', async (req,res) => {

  let id = req.query.id ? parseInt(req.query.id) : 0;
  var data = await fetachGameCoverByCoverId(id)

  if(data){
    res.send(data);
  }
});


// ============== Get Game Cover by ID =====================================================
async function fetachGameCover(ID) {
  const response = await igdb(API_KEY)
        .fields(['image_id', 'url', 'width'])
        .where(`game = ${ID}`)
        .request('/covers');
  return response.data
}

app.get('/api/getGameCover/', async (req,res) => {

  let id = req.query.id ? parseInt(req.query.id) : 0;
  var data = await fetachGameCover(id)

  if(data){
    res.send(data);
  }

});


// ============== Search Game by Name =====================================================
async function fetachGameByName(name) {
  const response = await igdb(API_KEY)
        .fields(['name', 'popularity', 'cover', 'release_dates'])
        .search(name)
        .request('/games');
  
  const promises = response.data.map(async data =>{

    if(data.cover){
      id = data.id
      const res = await axios.get(`${API_URL}/getGameCover/?id=${id}`)
      return res.data[res.data.length-1].image_id
    }else{
      return " "
    }
  } )

  const results = await Promise.all(promises)

  const modifiedData = response.data.map((data, index) => {
    image_id = results[index]
    return{
      ...data,
      image_id
    }
  })

  //return the modified data with image url 
  return modifiedData
}

// ============== Fecthing games =====================================================
async function fetchGameByGameId(id) {
  const response = await igdb(API_KEY)
        .fields(['name', 'platforms','storyline','summary', 'cover', 'genres', 'popularity', 'total_rating'])
        .where(`id = ${id}`)
        .request('/games');

        //geting the cover by cover id array
        const coverPromises = response.data.map(async data =>{
          if(data.cover){
            id = data.id
            const res = await axios.get(`${API_URL}/getGameCover/?id=${id}`)
            return res.data[res.data.length-1].image_id
          }else{
            return " "
          }
        } )

        //getting the genres name by genres id array 
        const genresPromises = response.data.map(async data => {
          if(data.genres){
            id= data.genres.toString();
            const res = await axios.get(`${API_URL}/getGenres/?id=${id}`)
            return res.data.map(i => i.name) 
          }else{
            return " "
          }
        })

        //getting the platfomr names by platform id array
        const platfromPromises = response.data.map(async data => {
          if(data.genres){
            id= data.genres.toString();
            const res = await axios.get(`${API_URL}/getPlaforms/?id=${id}`)
            return res.data.map(i => i.name) 
          }else{
            return " "
          }
        })

    
        const coverResults = await Promise.all(coverPromises);
        const genreNames =  await Promise.all(genresPromises);
        const platformNames = await Promise.all(platfromPromises);

  
        const modifiedData = response.data.map((data, index) => {
          image_id = coverResults[index]
          return{
            ...data,
            image_id,
            genreNames,
            platformNames,
          }
        })
      
        //return the modified data with image url 
        return modifiedData

}

app.get('/api/getGamesById/', async (req,res) => {
    let id = req.query.id ? parseInt(req.query.id) : 0;
    var data = await fetchGameByGameId(id)
    if(data){
      res.send(data);
    }
});

// ============== Fecthing Genres =====================================================
async function fetachGenres(id) {
  const response = await igdb(API_KEY)
        .fields(['name'])
        .where(`id = (${id})`)
        .request('/genres');
  return response.data
}

app.get('/api/getGenres/', async (req,res) => {
  let id = req.query.id ? req.query.id  : 0;
  var data = await fetachGenres(id)
  if(data){
    res.send(data);
  }
});

// ============== Fecthing Platforms =====================================================
async function fetachPlatforms(id) {
  const response = await igdb(API_KEY)
        .fields(['name'])
        .where(`id = (${id})`)
        .request('/platforms');
  return response.data
}

app.get('/api/getPlaforms/', async (req,res) => {
  let id = req.query.id ? req.query.id  : 0;
  var data = await fetachPlatforms(id)
  if(data){
    res.send(data);
  }
});


// ============== Fecthing Artworks =====================================================
async function fetachArtworks(id) {
  const response = await igdb(API_KEY)
        .fields(['height','image_id','url','width'])
        .where(`id = ${id}`)
        .request('/artworks');
  return response.data
}

app.get('/api/getArtworks/', async (req,res) => {
  let id = req.query.id ? req.query.id  : 0;
  var data = await fetachArtworks(id)
  if(data){
    res.send(data);
  }
});


app.get('/api/searchGame', async (req,res) => {

  let name = req.query.name ? req.query.name : '';
  var data = await fetachGameByName(name)

  if(data){
    res.send(data);
  }
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
