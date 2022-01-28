const express = require('express'); //usamos express
const passport = require('passport');
const AuthService = require('./../services/authService');
const UserService = require('./../services/userService');
const service = new AuthService();
const serviceUser = new UserService()
const router = express.Router();

const validatorHandler = require('./../middleware/validatorHandler');
const {
    createUserSchema,
} = require('./../schemas/usersSchemas');

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);



router.post(
    '/register',
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newUser = await serviceUser.create(body);
            res.status(201).json(newUser);
            await service.welcome(body.email)
        } catch (error) {
            next(error);
        }
    }
);


router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const rta = await service.sendRecovery(email);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

router.post('/change-password', async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    const rta = await service.changePassword(token, newPassword);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
