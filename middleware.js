module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.flash('error', 'You Must Be Signed In')
        return res.redirect('/login')
    }
    next()
}