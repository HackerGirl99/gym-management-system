const express =require('express');
const Router = express.Router();
const RoleController = require('../Controller/RoleController');


Router.post('/add',RoleController.getRole);

module.exports = Router;