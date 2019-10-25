const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    const dupplicateNote = notes.find((note) => note.title === title)
    console.log(title)
    console.log(dupplicateNote)
        if(!dupplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('Note is Added'))
    }
    else{
        console.log(chalk.inverse.red('Note is taken'))
    }
}
const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data)
    }catch(e){
        return []
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)
    if(noteToKeep.length === 0){
        console.log(chalk.inverse.red('No note found'))
        saveNotes(noteToKeep)
    }else{
        console.log(chalk.inverse.green('Note is removed'))
        saveNotes(noteToKeep)
    }
}
const listNote = () => {
    console.log(chalk.inverse.green('Your notes'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title + ' ' + note.body)
    });
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse.green('title: ' + note.title))
        console.log('body: ' + note.body)
    }
    else{
        console.log(chalk.inverse.red('No note found'))
        
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}