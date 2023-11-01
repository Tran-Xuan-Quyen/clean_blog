const Question = require('../models/Question')
module.exports = (req, res) => {
    Question.create(req.body, (error, question) => {
        console.log(122);
        if(error) {
            console.log(error);
        }
        else {
            console.log(question);
            res.redirect('/');
        }
    })
    // .then((question) => {
    //     console.log(question);
    //     res.redirect('/');
    // })
    // .catch((error) => { console.error(error);})
}