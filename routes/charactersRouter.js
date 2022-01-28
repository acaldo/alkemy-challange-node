const express = require('express');

const CharactersService = require('./../services/charactersService');
const validatorHandler = require('./../middleware/validatorHandler');
const {
  updateCharacterSchema,
  createCharacterSchema,
  getCharacterSchema,
} = require('./../schemas/charactersSchemas');
//const passport = require('passport');

const router = express.Router();
const service = new CharactersService();

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
  validatorHandler(getCharacterSchema, 'params'),
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
  validatorHandler(createCharacterSchema, 'body'),
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
  //passport.authenticate('jwt', { session: false }),
  validatorHandler(getCharacterSchema, 'params'),
  validatorHandler(updateCharacterSchema, 'body'),
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
  //passport.authenticate('jwt', { session: false }),
  validatorHandler(getCharacterSchema, 'params'),
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