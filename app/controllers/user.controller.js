const user = require('../models/user_module.js');
const db = require('../models');
let Users = require("../models/user_module.js");


//Method to save user detail in the databse
exports.create = (req, res) => {
    const User = new Users({
        fullname: req.body.fullname,
        username: req.body.username,
        profile_url: req.body.profile_url,
        total_post_count: req.body.total_post_count,
        total_followers_count: req.body.total_followers_count,
        total_following_count: req.body.total_following_count,
        top_posts: req.body.top_posts

    });
    User.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });

};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    Users.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};

// Find user detail on the base of username
exports.findOne = (req, res) => {
    Users.find({
        username:req.query.username
    }).then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

//Update user information on the bae of username
exports.update=(req,res)=>{
    Users.findOneAndUpdate({
        username:req.body.username
    },{
        fullname: req.body.fullname,
        profile_url: req.body.profile_url,
        total_post_count: req.body.total_post_count,
        total_followers_count: req.body.total_followers_count,
        total_following_count: req.body.total_following_count,
    }).then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};


// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};