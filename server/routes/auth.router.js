const express = require('express');
const passport = require('passport');

const AuthService = require('./../services/auth.service');
const router = express.Router();
const service = new AuthService();

// TODO: importamos el controller de auth
const AuthController = require('../controllers/auth.controller')

// TODO: usamos dentro del POST el AuthController.Login o AuthController.Login() para limpiar mas el codigo
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  AuthController.Login
);
// TODO: usamos dentro del POST el AuthController.Recovery o AuthController.Recovery() para limpiar mas el codigo
router.post('/recovery', AuthController.Recovery);

// ----------------------------------------
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
