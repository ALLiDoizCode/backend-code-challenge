var exports = module.exports = {};
var geoService = require('../Services/GeoService')

exports.closest = async (req, res) => {
    const unit = req.query.unit
    var data = await geoService.findStore("mi", "3435 toomer kiln circle", "29466")
    res.json(data);
 };

