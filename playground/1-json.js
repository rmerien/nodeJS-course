/*const fs = require('fs')

const book = {
    title: 'The 12 rules of life',
    author: 'Ptdr i forgot'
}

const bookJSON = JSON.stringify(book)

//fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)*/

// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing in the JSON file

const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer.toString())

data.name = 'Ronan'
data.age = 20

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON)