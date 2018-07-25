const mongoose = require("mongoose");
const GeoJSON = require('mongoose-geojson-schema');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userid: Schema.Types.ObjectId,
    comment: String
});

const postSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        required: true
    },
    contentUrl: {
        type: [String],
        required: true
    },
    description: String,
    likedBy: [Schema.Types.ObjectId],
    archivedBy: [Schema.Types.ObjectId],
    location: {
        type: mongoose.Schema.Types.Point,
        required: true
    },
    comments: [commentSchema],
});

module.exports = mongoose.model("post",postSchema);