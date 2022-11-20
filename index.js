const express = require('express');
const fileUpload = require('express-fileupload');

const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));
app.use(cors());

const hbs = require('hbs');




app.use(fileUpload());

app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));


app.get('/', (req, res) => {
    res.render('main_page');

});

app.get('/admission', (req, res) => {
    res.render('admission');

});



app.get('/main_page', (req, res) => {
    res.render('main_page');

});


app.get('/renew', (req, res) => {
    res.render('renew');

});

app.get('/submit', (req, res) => {
    res.render('submit');

});

app.get('/renew_pass', (req, res) => {
    res.render('renew_pass');

});

app.get('/new_visa', (req, res) => {
    res.render('new_visa');

});

app.get('/choice1', (req, res) => {
    res.render('choice1');

});

app.get('/choice2', (req, res) => {
    res.render('choice2');

});

app.get('/choice3', (req, res) => {
    res.render('choice3');

});

app.get('/cancel_visa', (req, res) => {
    res.render('cancel_visa');

});

app.listen(3001, () => {
    console.log('start');
    console.log('http://localhost:3001/');
})
