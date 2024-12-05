// import {mkdir} from 'node:fs';

const fs = require('fs');

fs.mkdir('project', {recursive: true}, (err) => {
    console.log('di dlm callback')
    if(err) throw err;
});

console.log('setelah callback');
