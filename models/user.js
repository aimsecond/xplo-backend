const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        required: true
    },
    createOn: {
        type: Date,
        default: Date.now
    },
    interest: [String],
    following: [Schema.Types.ObjectId],
    followingNumber: Number,
    followers: [Schema.Types.ObjectId],
    followersNumber: Number,
    posts: [Schema.Types.ObjectId],
    postsNumber: Number,
    avatarUrl: String,
    archives: [Schema.Types.ObjectId],
});

module.exports = mongoose.model("user",userSchema);