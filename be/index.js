let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const createError = require('http-errors');
// Express Route
const studentRoute = require('./routes/student.route')
// Connecting mongoDB Database
mongoose
    .connect('mongodb://127.0.0.1:27017/crudDatabase')
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({ origin: true, credentials: true }));
app.use('/students', studentRoute)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
// 404 Error
app.use((req, res, next) => {
    res.status(404).send('Error 404!');
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    res.status(err.statusCode).send(err.message);
});