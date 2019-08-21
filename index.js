var NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'mapquest',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'ue7X0mm3o0t8rZR8HxWDhTAh2ANAARtF', // for Mapquest, OpenCage, Google Premier
    //formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

// Using callback
geocoder.geocode({ address: '29 champs elysée', country: 'France', zipcode: '75008' }, function (err, res) {
    //console.log(res);
});


let getDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
}

let getNearest = (point,points) => {
    var result = points.reduce((min, p) => getDistance(min, point) < getDistance(p, point) ? min : p)
    return result
}


console.log(result);
