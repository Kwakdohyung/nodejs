const fs = require('fs');
// const book ={
//     title : 'Ego is the Enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer);


data.name = 'Dohyung';
data.planet = 'Ansan';
data.age = 26;

console.log(data);

const dataJSON =JSON.stringify(data);


// getChange();

fs.writeFileSync('1-json.json', dataJSON);