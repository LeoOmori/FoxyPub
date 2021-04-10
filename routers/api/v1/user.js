const router = require("express").Router();
const userController = require("../../../controllers/userController");


router.post('/user',userController.store);
router.get('/user/:name',userController.show);


module.exports = router;

