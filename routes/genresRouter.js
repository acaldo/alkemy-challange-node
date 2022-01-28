const express = require('express');

const GenresService = require('./../services/genresService');
const validatorHandler = require('../middleware/validatorHandler');
const {
  updateGenreSchema,
  createGenreSchema,
  getGenreSchema,
} = require('./../schemas/genresSchemas');
const passport = require('passport');

const router = express.Router();
const service = new GenresService();

router.get('/', 
  //passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const movies = await service.find();
      res.json(movies)
    } catch (error) {
      next(error);
    }
  });

router.get(
  '/:id',
  //passport.authenticate('jwt', { session: false }),
  validatorHandler(getGenreSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const movie = await service.findOne(id);
      res.json(movie);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  //passport.authenticate('jwt', { session: false }),
  validatorHandler(createGenreSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMovie = await service.create(body);
      res.status(201).json(newMovie);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getGenreSchema, 'params'),
  validatorHandler(updateGenreSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const movie = await service.update(id, body);
      res.json(movie);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getGenreSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;