const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Challenge: Add an option to yargs
//
// 1. Setup a  body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Challenge: Add two new commands
//
// 1. Setup command to support 'list' command
// 2. Setup command to support 'read' command

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)