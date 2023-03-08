const main = (req, res, next) => {
    title = "Jad Alrehaoui"
    subtitle = "Full stack developer"
    res.render('index', {title, subtitle})
}

module.exports = {
    main
}