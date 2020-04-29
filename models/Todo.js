const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: {
        text: String,
        // required: true
    },
    complited: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Todo', schema);