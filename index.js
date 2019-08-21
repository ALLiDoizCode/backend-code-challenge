var geo = require('./Geo');

const point = {
    "Latitude": 10,
    "Longitude": 30,
}

const location = geo.getNearest(point)
const km = geo.calcCrow(point.Latitude,point.Longitude,location.Latitude,location.Longitude)
console.log(location)
console.log(/*=========================================*/)
console.log(km.toFixed(1)+"km")
console.log(geo.toMiles(km).toFixed(1)+"m")