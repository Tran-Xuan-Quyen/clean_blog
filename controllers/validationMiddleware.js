module.exports = (req, res, next) => {
    if(req.files == null || req.body.title == null || req.body.body == null)
    {
        res.redirect('/')
    }
    next()
}