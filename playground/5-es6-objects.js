// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
	name,
	userAge,
	location: 'Philly'
}

console.log(user)

const product = {
	label: 'Red Notebook',
	price: 3,
	stock: 201,
	salePrice: undefined
}

const {label:productLabel, stock, rating = 5} = product

//console.log(label)
console.log(productLabel)
console.log(stock)

const transaction = (type, { label, stock }) => {
	console.log(type, label, stock)
}

transaction('order', product)