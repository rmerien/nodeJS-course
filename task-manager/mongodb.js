// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database.')
	}
	const db = client.db(databaseName)

	db.collection('users').findOne({ name: 'Ronan', _id: new ObjectID('5e3d29c8025aafdc5bca3546') }, (error, user) => {
		if (error) {
			return console.log('Unable to fetch')
		}

		console.log(user)
	})

	db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
		if (error) {
			return console.log('Unable to fetch')
		}

		console.log(tasks)
	})

	db.collection('users').updateOne({
		_id: new ObjectId("5e3d29c8025aafdc5bca3546")
	}, {
		$set: {
			name: 'Jackson'
		}
	})
	// db.collection('users').insertOne({
	// 	name: 'Juan',
	// 	age: 20
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert data : user.')
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('users').insertMany([
	// 	{
	// 		name: 'Paul',
	// 		age: 19
	// 	},
	// 	{
	// 		name: 'Phoebe',
	// 		age: 46
	// 	}
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert data : users.')
	// 	}
	// 	console.log(result.ops)
	// })

	// db.collection('tasks').insertMany([
	// 	{
	// 		desc: 'Go see Lucas',
	// 		completed: false
	// 	},
	// 	{
	// 		desc: 'Go pay Rayan',
	// 		completed: false
	// 	}
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert data : users.')
	// 	}
	// 	console.log(result.ops)
	// })
})