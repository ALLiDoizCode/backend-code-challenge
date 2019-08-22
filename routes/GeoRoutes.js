var exports = module.exports = {};
var geoService = require('../Services/GeoService')

exports.closest = async (req, res, next) => {
    const data = await geoService.findStore(req.query.unit, req.query.address, req.query.zip).catch((error) => {
        res.status(400).send(error+"")
        throw error
    })
    res.json(data)
};

