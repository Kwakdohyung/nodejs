const chalk = require('chalk');
const fs = require('fs');

const getNotes = () =>{
    return 'Your notes...';
}

const addNote = (title, body)=>{
    const notes = loadNotes();
    
    
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
            title : title,
            body : body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    }else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
}

const removeNote = (title) =>{
    const notes = loadNotes();
    
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title;
        // 리턴값이 title을 제외한 나머지 데이터들을 보여준다.
    });
    if(notes.length === notesToKeep.length){
        console.log(chalk.red('No note found!'));
    }else{
        saveNotes(notesToKeep);
        console.log(chalk.green('Note removed!'));
    }
    
}

const listNotes = () =>{
    const notes = loadNotes();
    
    console.log(chalk.inverse('Your notes'));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) =>{
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.inverse('title : ',note.title), ' body : ', note.body);
    }else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
};