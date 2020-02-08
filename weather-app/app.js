const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
let loc = process.argv[2]

if (!loc) {
  console.log('Please provide a location')
} else {
  geocode(loc, (error, {latitude, longitude, location}) => {
      if (error) {
          return (error)
      }
      forecast(latitude, longitude, (error, {degrees, rainProbability}) => {
          if (error) {
              return (error)
          }
          console.log(location)
          console.log(`Weather: ${degrees} degrees out. There is a ${rainProbability}% chance of rain.`)
      })
   })
}