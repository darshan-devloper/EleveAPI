const express = require('express');
const bodyParser = require('body-parser');
const user = require('./app/controllers/user.controller.js');
const db = require("./app/models");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))


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

app.use(bodyParser.json())

//API to get all users record
app.get('/users',user.findAll);

//API to get perticular user detail on the base of username
app.get('/userByUsername',user.findOne);

//API to save user detail
app.post('/user', user.create);


//API to update user info
app.post('/updateUser',user.update);



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});