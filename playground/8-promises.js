const doWorkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is the data you were looking for') // undefined is not necessary
		reject('Error : Could not retreive data') // undefined is necessary
	}, 2000)
})

doWorkPromise.then((result) => {
	console.log('Data')
}).catch((error) => {
	console.log(error)
})