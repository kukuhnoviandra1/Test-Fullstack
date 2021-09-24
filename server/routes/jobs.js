const JobRouter = require('express').Router();
const JobController = require('../controllers/JobController');
// const {authentication} = require('../middlewares/auth')
// const upload = require('../middlewares/multer')


JobRouter.get('/',JobController.showJobs)


module.exports = JobRouter;