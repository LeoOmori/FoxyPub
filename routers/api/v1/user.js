const router = require("express").Router();


router.get('/test', (req,res) => {

    res.json({message:'ok'});

})


module.exports = router;