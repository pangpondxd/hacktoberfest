const fs = require('fs')
// const book = {
//     title: 'Dukdui hate Pmee',
//     author: 'Dukdui'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)

data.name = 'Pmee love Dukdui'
data.author = 'Pmee'
data.price = '1 Baht'

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)
console.log(data)

