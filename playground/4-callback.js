// import { callbackify } from "util"

// setTimeout(() => {
// 	console.log('Two seconds passed')
// }, 2000)

// const names = ['Ronan', 'Andrew', 'Lol']
// const shortNames = names.filter((name) => {
// 	return name.length < 5
// })


// const geocode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			lat: 0,
// 			long: 0
// 		}
// 		callback(data)
// 	}, 2000)
// }

// const data = geocode('Philadelphia', (data) => {
// 	console.log(data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (x, y, callback) => {
// 	setTimeout(() => {
// 		callback(x + y)
// 	}, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

const doWorkCallback = (callback) => {
	setTimeout(() => {
		callback('This is my error!', undefined) // undefined is not necessary
		callback(undefined, 'This is the result') // undefined is necessary
	}, 2000)
}

doWorkCallback((error, result) => {
	if (error) {
		return console.log('Error')
	}
	console.log(result)
})