const mongoose = require('mongoose');

let blogSchema = mongoose.Schema({
    title: {
        type: String,

    },
    image: {
        type: String,

    },
    comment: {
        type: String,  
    }
});


module.exports = mongoose.model('blogModel', blogSchema);