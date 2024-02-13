const request = require("request");
const geocode = (address, callback) => {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?limit=1&access_token=pk.eyJ1IjoidGFydW5wYXJtYXI3NTIyIiwiYSI6ImNsZjkxbTBmOTF1bngzd29jMHNpcWJtMjgifQ.ejy6DHoYagrQLZzp9F_SVQ";

    request({ url, json: true },(error, { body }) => {
      if (error) {
        callback('Unable to connect to location services', undefined)
      } else if (body.features.length === 0) {
        callback('Unable to find such location', undefined)
      } else {
        callback(undefined,{
            latitude: body.features[0].geometry.coordinates[1],
            longitude: body.features[0].geometry.coordinates[0],
            location: body.features[0].place_name
        })
      }
    })
}

module.exports = geocode