const https = require('https')
const url = `https://api.darksky.net/forecast/50656e10e737a51800d37d610b2374be/40,-75`

const request = https.request(url, (response) => {
	let data = ''

	response.on('data', (chunk) => {
		data += chunk.toString()
		console.log(chunk)
	})
	response.on('end', () => {
		console.log(data)
		const body = JSON.parse(data)
		console.log(body)
	})

})

request.on('error', (error) => {
	console.log('Error : ', error)
})

request.end()