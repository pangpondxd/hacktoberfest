const request = require('request')
const geocode = require('./utils/geocode')
// const url = 'https://api.darksky.net/forecast/8899f2b2cd575f25cec51a644b3dd948/7.89059,98.3981?units=si'
// request({ url:  url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect weather service!')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log('Province: ' + response.body.timezone)
//         console.log('Temperrature: ' + response.body.currently.temperature + ' Chance: '  +  response.body.currently.precipProbability)
//     }
// })

//Geocoding
//Address -> Lat/Long -> Weather

//Goal : Print the Lad/Long for Los Angeles
//
//1.fire off a new request to the URL explored in browser
//2.Have the request module parse it to JSON
//3.Print both the Latitude and Longitude to the terminal
//4.Test your work!

//Handling Error
//1.Set up the handler for low-level error
//2.Test by disable network request and running the app
//3.Setup error handling for no matching result
//4.Test by altering the search term and running app

// const urls = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFuZ3BvbmR4ZCIsImEiOiJjazI0bGxuNzQxOGlqM21tbDA3bXFyMnZkIn0.F3kWvN1WgFSlYBPLrX-nCg'
// request({ url: urls, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect mapbox')
//     }
//     else if(response.body.features.length === 0){
//         console.log('Unable to find location')
//     }
//     else{
//         const Latitude = response.body.features[0].center[1]
//         const Longitude = response.body.features[0].center[0]
//         console.log('Lad / Long' + Latitude + Longitude)
//     }
    
// })

geocode('China', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

