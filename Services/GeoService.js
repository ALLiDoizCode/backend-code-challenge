var geo = require('./Geo');
var exports = module.exports = {};

exports.findStore = (units, address, zip) => {
    return new Promise(function (resolve, reject) {
        return geo.geocoder.geocode({ address: address, zipcode: zip }).then((res) => {
            const point = {
                "Latitude": res[0].latitude,
                "Longitude": res[0].longitude
            }
            const location = geo.getNearest(point)
            const km = geo.calcCrow(point.Latitude, point.Longitude, location.Latitude, location.Longitude)
            const result = {
                "address": location.Address,
                "Store Location": location["Store Location"],
                "unit": "mi",
                "distance": geo.toMiles(km).toFixed(1)
            }
            if (units == "km") {
                result.unit = "km"
                result.distance = km.toFixed(1)
            }
            resolve(result);
        }).catch((err) => {
            reject(err)
        })

    })
}


