const listLocation = (locations) => locations.map((location) => 'I live in' + location)
const  myLocations = ['Thailand','China']
listLocation(myLocations)
const ExOnlyKnow = listLocation(myLocations)
ExOnlyKnow.map(x => console.log(x))