var geo = require('./Geo');
var exports = module.exports = {};

exports.findStore = (unit, address, zip) => {
    return new Promise(function (resolve, reject) {

        return geo.geocoder.geocode({ address: address, zipcode: zip }, function (err, res) {
            console.log(res);
            const point = {
                "Latitude": res[0].latitude,
                "Longitude": res[0].longitude
            }
            console.log(point)
            const location = geo.getNearest(point)
            const km = geo.calcCrow(point.Latitude, point.Longitude, location.Latitude, location.Longitude)
            console.log(location)
            console.log(km.toFixed(1) + "km")
            console.log(geo.toMiles(km).toFixed(1) + "m")
    
            const result = {
                "address": location.Address,
                "unit":"km",
                "distance": km.toFixed(1)
            }
            if (unit == "mi") {
                result.unit = "mi"
                result.distance = geo.toMiles(km).toFixed(1)
            }
            resolve(result);
        });
        reject("Error");
    })
} 


