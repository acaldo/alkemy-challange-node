const express = require('express')

const authRouter = require('./authRouter');
const charactersRouter = require('./charactersRouter');
const moviesRouter = require('./moviesRouter');
const gendersRouter = require('./gendersRouter');


function routerApi(app) {
    const router = express.Router()
    app.use('',router);
    router.use('/characters', charactersRouter)
    router.use('/movies', moviesRouter);
    router.use('auth/login', authRouter)
    router.use('genders', gendersRouter)
}

module.exports = routerApi