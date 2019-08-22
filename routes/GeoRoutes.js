var exports = module.exports = {};
var geoService = require('../Services/GeoService')

exports.closest = async (req, res) => {
    const unit = req.query.unit
    const address = req.query.address
    const zip = req.query.zip

    var data = await geoService.findStore(unit, address, zip)
    res.json(data);
 };

