const igdb = require('igdb-api-node').default;
const API_KEY = "fe9eb0de0102be7f3022ce3bb09802fc";
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

async function dataSearch(limit) {
  const response = await igdb(API_KEY)
        .fields(['name', 'genres', 'popularity'])
        .limit(parseInt(limit))
        .offset(100) // set this value to higher if you want to filter out more games
        .sort('name', 'desc')
        .request('/games');

  return response.data
}

// An api endpoint that returns a short list of items
app.get('/api/getGames', async (req,res) => {

    let limit = req.query.limit ? parseInt(req.query.limit) : 1;

    console.log(limit)
    var data = await dataSearch(limit)
    if(data){
      res.send(data);
    }
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
