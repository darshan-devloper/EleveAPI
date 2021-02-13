const mongoose = require('mongoose')
var Schema = mongoose.Schema;
let UserSchema = new Schema({
    fullname:String,
    username:String,
    profile_url:String,
    total_post_count:Number,
    total_followers_count:Number,
    total_following_count:Number,
    top_posts:Array
});

module.exports = mongoose.model('User',UserSchema,'User');
