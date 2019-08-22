var express = require('express');
var cors = require('cors');
const geoRoutes = require('./routes/GeoRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

app.get('/closest',geoRoutes.closest);

app.listen(process.env.PORT, () =>
    console.log('Example app listening on port 3000!'),
);



