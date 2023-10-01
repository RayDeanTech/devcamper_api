const NodeGeocoder = require('node-geocoder');

// virtualearth: VirtualEarthGeocoder (Bing maps).
// Supports address geocoding. You need to specify options.apiKey

const options = {
    provider: 'virtualearth',
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;