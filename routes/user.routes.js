const { Router } = require('express');
const { CrearUsuario } = require('../controllers/user.controller');

const routerUser = Router();

// lista
// routerUser.get('/')
// crea
routerUser.post('/register', CrearUsuario )
// login
// routerUser.post('/login')

module.exports = { routerUser }