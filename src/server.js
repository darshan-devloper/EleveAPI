const serverless = require('serverless-http');
const express = require('express');
const app = express();
const router = express.Router();
const user = require('./controllers/user.controller.js');
const db = require("./models");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Code to connect to database
db.mongoose.connect(db.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// End

//API to get all users record
router.get('/users',user.findAll);

//API to get perticular user detail on the base of username
router.get('/userByUsername',user.findOne);

//API to save user detail
router.post('/user', user.create);


//API to update user info
router.post('/updateUser',user.update);

app.use('/.netlify/functions/server',router);

module.exports.handler = serverless(app);