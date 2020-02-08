// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

const square = (x) => x * x

console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Ronan', 'Juan', 'Amelia'],
    printGuestList: function () {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach(function (guest) {               // This does not work
            console.log(guest + ' is attending ' + this.name)
        })
    },
    printGuestList2: () => {
        // console.log('Guest list for ' + this.name) --->>> THIS = Undefined
        //
        // this.guestList.forEach(function (guest) {
        //     console.log(guest + ' is attending ' + this.name)
        // })
    },
    printGuestList3() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach( (guest) => {                    // This works
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()
event.printGuestList2()
event.printGuestList3()