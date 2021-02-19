const fs = require('fs');
const path = require('path');

// fs.mkdir(`${__dirname}/18-00`, {recursive: true}, err => {
//     if (err){
//         console.log(err);
//     }
// })

// fs.mkdir(`${__dirname}/20-00`, {recursive: true}, err => {
//     if (err){
//         console.log(err);
//     }
// })

const firstFolder = path.join(__dirname, '18-00')
const secondFolder = path.join(__dirname, '20-00')

fs.readdir(firstFolder, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
    files.forEach((file) => {
        console.log('file: ', file)
        fs.readFile(path.join(firstFolder, file), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('data: ', JSON.parse(data.toString()))
            const parcedUser = JSON.parse(data.toString());
            if (parcedUser.gender === 'male'){
                fs.rename(`${firstFolder}/${file}`, `${secondFolder}/${file}`, err => {
                    if (err){
                        console.log(err);
                    }
                })
            }
        })
    })
})

fs.readdir(secondFolder, (err, files) => {
    if (err) {
        console.log(err);
    }
    files.forEach((file) => {
        console.log(file);
        fs.readFile(path.join(secondFolder, file), (err, data) => {
            if (err){
                console.log(err);
                return;
            }
            const parsedUser = JSON.parse(data.toString());
            console.log(parsedUser);
            if (parsedUser.gender === 'female'){
                fs.rename(path.join(secondFolder, file), path.join(firstFolder, file), err => {
                    if (err){
                        console.log(err);
                    }
                })
            }
        })
    })
})