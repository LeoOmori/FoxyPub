const router = require("express").Router();

//All routers
const userRouter = require('./user');
const authRouter = require('./authentication');



/////user routers
router.use(userRouter);
router.use(authRouter);


module.exports = router;