const fs = require('fs');
const path = require('path');

fs.mkdir(`${__dirname}/18-00`, {recursive: true}, err => {
    if (err){
        console.log(err);
    }
})

fs.mkdir(`${__dirname}/20-00`, {recursive: true}, err => {
    if (err){
        console.log(err);
    }
})