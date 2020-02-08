const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    const notes = loadNotes()
    console.log('These are your notes')
    notes.forEach((e) => console.log(chalk.yellow(`${e.title} : ${e.body}`)))
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicates = notes.filter((note) => note.title === title) -> Less efficient
    const duplicate = notes.find((note) => note.title === title)

    if (!duplicate) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(`Added note ${title}`)
    } else {
        console.log(`Note '${title}' already exists!`)
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title)

    if (updatedNotes.length === notes.length) {
        saveNotes(notes)
        console.log(chalk.red(`No '${title}' note found.`))
    } else {
        saveNotes(updatedNotes)
        console.log(chalk.green(`Note '${title}' removed.`))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const toRead = notes.find((note) => note.title === title)

    if (toRead) {
        console.log(`${title} : ${toRead.body}`)
    } else {
        console.log(`Note '${title}' does not exist!`)
    }
}

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('notepad.json')
        return JSON.parse(buffer.toString())
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notepad.json', JSON.stringify(notes))
}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}