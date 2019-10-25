const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGFuZ3BvbmR4ZCIsImEiOiJjazI0bGxuNzQxOGlqM21tbDA3bXFyMnZkIn0.F3kWvN1WgFSlYBPLrX-nCg'

    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location serviced',undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode