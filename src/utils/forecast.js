const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
    latitude +
    "," +
    longitude +
    "?key=YZDSX5C78XFVFM2DSYBHR9FYA";

  request({ url , json: true }, function (error, { body }) {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to fetch data. Kindly check url", undefined);
    } else {
      callback(undefined, body.description + " The temperature is " + body.currentConditions.temp + " Farenhit. " + body.currentConditions.precipprob +"% chance of rain.");
    }
  });
};

module.exports = forecast 