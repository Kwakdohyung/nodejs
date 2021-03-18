// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


yargs.version('1.1.0');

yargs.command({
    command:'add',
    describe: 'Add a new note' ,
    builder:{
        title:{
            describe:'Note title',
            demanOption:true,    //default : false
            type:'string'
        },
        body:{
            describe:'Note Body',
            demanOption:true,
            type:'string'
        }
    },
    handler : function(argv){
        notes.addNote(argv.title, argv.body);
        
    }
});

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demanOption:true,  
            type:'string'

        }
    },
    handler:function(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command:'list',
    describe:'List a note',
    handler:function(){
        console.log('Listing the note');
    }
});

yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log('Reading the note');
    }
});

yargs.parse(); //프로그램을 저장하고 명령을 다시 실행한다
//console.log(yargs.argv);