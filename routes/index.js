const express = require('express')

const authRouter = require('./authRouter');
const charactersRouter = require('./charactersRouter');
const moviesRouter = require('./moviesRouter');
const genresRouter = require('./genresRouter');


function routerApi(app) {
    const router = express.Router()
    app.use('/',router);
    router.use('/characters', charactersRouter)
    router.use('/movies', moviesRouter);
    router.use('/auth', authRouter)
    router.use('/genres', genresRouter)
}

module.exports = routerApi