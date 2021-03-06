const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=822c22892008965bc87fedc990c52344&query=' +
    latitude +
    ',' +
    longitude +
    '&units=f'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      console.log(body.current)
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degress out. It feels like ' +
          body.current.feelslike +
          ' degree out. The humidity is' +
          body.current.humidity +
          '%'
      )
    }
  })
}

module.exports = forecast
