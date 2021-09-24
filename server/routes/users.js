const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');
const {authentication} = require('../middlewares/auth')

UserRouter.get('/',UserController.showUsers)
UserRouter.get('/:id',authentication,UserController.showUsersById)
UserRouter.post('/register',UserController.registerUsers)
UserRouter.post('/login',UserController.loginUsers)
UserRouter.delete('/delete/:id',UserController.deleteUsers)
UserRouter.put('/update/',authentication,UserController.updateUsers)



module.exports = UserRouter ;