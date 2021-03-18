const chalk = require('chalk');
const fs = require('fs');

const getNotes = function(){
    return 'Your notes...';
}

const addNote = (title, body)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });

    if(duplicateNotes.length === 0){
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
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
};