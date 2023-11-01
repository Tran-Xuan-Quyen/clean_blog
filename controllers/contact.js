module.exports = (req, res) => {
    if(req.session.userId){
    res.render('contact')
    }
    else res.render('/auth/login');
}