const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path')
const fs = require('fs');

const app = express();

app.listen(5000, () => {
    console.log('App listen 5000');
})

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'views')));


app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}))
app.set('views', path.join(__dirname, 'views'))

const usersFilePath = path.join(__dirname, 'users.txt');

// _________________________________________________________________________________________________________________________________
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    fs.readFile(usersFilePath, (err, success) => {
        if (err){
            console.log(err);
            return;
        }
        const parsedUsers = JSON.parse(success.toString())  //array
        parsedUsers.forEach((parsedUser) => {
            if (parsedUser.email === req.body.email){
                console.log('User exists');
                return;
            }
        })
        parsedUsers.push(req.body)
        fs.writeFile(usersFilePath, JSON.stringify(parsedUsers), err => {
            if (err){
                console.log(err);
            }
        })
        res.redirect('/users');
    })
})

app.get('/users', (req, res) => {
    fs.readFile(usersFilePath, (err, data) => {
        if (err){
            console.log(err);
            return;
        }
        users = JSON.parse(data.toString());
        res.render('users', {
            users
        })
    })
})

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    console.log(req.params);
    res.json(users[userId]);
})