const router = require("express").Router();

router.use('/v1/api', require('./api/v1'));
router.get('/', (req, res) => res.send({ Ok : true }));

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



