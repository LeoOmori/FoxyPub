const router = require("express").Router();

router.use('/api/v1', require('./api/v1'));


// router.use( (err, req, res, next) => {

//     if(err.name = 'ValidationError'){
//         return  res.status(422).json({
//             erros: Object.keys(err.errors).reduce(( errors, key) =>  {
//                 errors[key] = err.errors[key.message]; 
//                 return errors; 
//             },{})
//         });
//     }

// });

module.exports = router;



