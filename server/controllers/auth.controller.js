const express = require('express');
const AuthService = require('./../services/auth.service');
const service = new AuthService();
const passport = require('passport');

const Login = (req, res, next) => {
    try {
      const user = req.user;
      //realiza el token
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
}

const Recovery =  async (req, res, next) => {
    try {
      const { email } = req.body;
      const rta = await service.sendRecovery(email);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
  
module.exports = {Login, Recovery};
