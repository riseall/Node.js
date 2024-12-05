// import {mkdir} from 'node:fs';

const fs = require('fs');

// fs.mkdir('project', {recursive: true}, (err) => {
//     console.log('di dlm callback')
//     if(err) throw err;
// });

try {
    fs.mkdirSync('project');
    fs.writeFileSync('project/index.html', '');
    console.log('berhasil');
} catch (error) {
    console.log(error);
}
