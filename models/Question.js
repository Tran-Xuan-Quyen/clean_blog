const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
    username: String,
    EmailAddress: String,
    PhoneNumber: String,
    Message: String,
    DatePosted: {
        type: Date,
        default: new Date(),
    }
})
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;