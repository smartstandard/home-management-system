const usersRouter = require('express').Router();
const usersController = require('../controllers/usersController');

const { loginValidation, registerValidation } = require('../middlewares/userValidations.js');

usersRouter.get('/', usersController.getAllUsers);
usersRouter.post('/login', loginValidation, usersController.login);
usersRouter.post('/register', registerValidation, usersController.register);
usersRouter.post('/logout', usersController.logout);
usersRouter.patch('/update', usersController.updateUser);
usersRouter.delete('/delete', usersController.deleteUser);

module.exports = usersRouter;
