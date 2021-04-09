const router = require("express").Router();

//All routers
const userRouter = require('./user');



/////user routers
router.use(userRouter);


module.exports = router;