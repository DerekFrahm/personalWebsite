exports.getHome = async(req, res) => {
    res.status(200).render('home')
}

exports.getResume = async(req, res) => {
    res.status(200).render('resume')
}