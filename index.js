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


app.listen(3001, () => {
    console.log('start');
    console.log('http://localhost:3001/');
})
