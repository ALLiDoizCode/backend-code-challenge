var storeLocation = require('../StoreLocation');

var exports = module.exports = {};

let getDistance = (location1, location2) => {
    return Math.sqrt(Math.pow(location1.Longitude - location2.Longitude, 2) + Math.pow(location1.Latitude - location2.Latitude, 2))
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
exports.calcCrow = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

exports.getNearest = (point) => {
    var result = storeLocation.stores.reduce((min, p) => getDistance(min, point) < getDistance(p, point) ? min : p)
    return result
}

exports.toMiles = (km) => {
    return km / 1.6
}
