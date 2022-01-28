const express = require('express');

const MoviesService = require('./../services/moviesService');
const validatorHandler = require('./../middleware/validatorHandler');
const {
  updateMovieSchema,
  createMovieSchema,
  getMovieSchema,
} = require('./../schemas/moviesSchemas');
const passport = require('passport');

const router = express.Router();
const service = new MoviesService();

router.get('/', 
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const movies = await service.find(req.query);
      res.json(movies)
    } catch (error) {
      next(error);
    }
  });

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getMovieSchema, 'params'),
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
  validatorHandler(createMovieSchema, 'body'),
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
  validatorHandler(getMovieSchema, 'params'),
  validatorHandler(updateMovieSchema, 'body'),
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
  validatorHandler(getMovieSchema, 'params'),
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