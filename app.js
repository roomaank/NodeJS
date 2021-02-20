const express = require('express');
const path = require('path')
const expressHbs = require('express-handlebars');

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

const users = [];

// _________________________________________________________________________________________________________________________________
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    users.push(req.body);
    // res.json('User registered')
    res.redirect('/users');
})

app.get('/users', (req, res) => {
    res.render('users', {
        users
    })
})