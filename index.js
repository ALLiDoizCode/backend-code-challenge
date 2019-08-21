var geo = require('./Geo');

geo.geocoder.geocode({ address: '3435 toomer kiln circle', country: 'US', zipcode: '29466' }, function (err, res) {
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

});


