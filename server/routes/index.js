const express = require("express");
const passport = require("passport");

//const usuarioRouter = require("./usuario.router");
const adminEndpoint = require("./endpoints/admin.endpoint");
const authRouter = require("./auth.router");
const prueba = require("./prueba.router");
const doctorRouter = require("./doctor.router");

//middleware que verifica token para dar acceso
const estaAutorizado = passport.authenticate("jwt", { session: false });

function routerApi(app) {
  const router = express.Router();

  app.use("/api", router);
  router.use("/prueba", prueba);

  //ruta de login etc
  app.use("/auth", authRouter);
  //admin /middleware/ router que usa (en este caso usuario)
  app.use("/admin", estaAutorizado, adminEndpoint);
  //crea usuario-doctor-persona
  app.use("/doctor", estaAutorizado, doctorRouter);
}

module.exports = routerApi;
