const router = require('express').Router();
router.get('/',(req, res) =>{
    res.status(200).json({
        message : "GitHub Jobs"
    })
})



const UsersRoutes = require('./users')
const JobsRoutes = require('./jobs')
// const OrdersRoutes = require('./orders')
// const CourseContentsRoutes = require('./coursecontents')
// const CoursesRoutes = require('./courses')
// const CoursesCartsRoutes = require('./coursecarts')

router.use('/users', UsersRoutes)
router.use('/jobs', JobsRoutes)
// router.use('/orders', OrdersRoutes)
// router.use('/course_contents', CourseContentsRoutes)
// router.use('/courses', CoursesRoutes)
// router.use('/course_carts', CoursesCartsRoutes)

module.exports = router;