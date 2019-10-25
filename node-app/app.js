const validator = require('validator')
const notes = require('./notes.js')
const yargs = require('yargs')

//customize yargs version
yargs.version('1.1.0')

//Create add command
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
            describe: 'Body title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)  {
        notes.addNote(argv.title, argv.body)
    }
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List the note',
    builder: {
        title: {
            describe: 'List command',
        }
    },
    handler() {
        notes.listNote()
}
})

yargs.command({
    command: 'read',
    builder: {
        title: {
            describe: 'Read the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()




