var express = require('express');
var cors = require('cors');
var geoService = require('./Services/GeoService')
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
   var data = await geoService.findStore("mi", "3435 toomer kiln circle", "29466")
   res.json(data);
});

app.listen(process.env.PORT, () =>
    console.log('Example app listening on port 3000!'),
);



