const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

module.exports = {

    async login(req, res, next){

        const {email, password} = req.body;

        let newUser = null;

        try{

            newUser = await User.findOne({where:{email}, raw:true});

        }
        catch(e){
            return next(new Error(e));
        }
        
        /// if email is not found
        if(newUser === null){

            return res.status(401).json({message:"e-mail not found"});

        }

    
        const password2 = newUser.password;
        /// validate password

        bcrypt.compare(password, password2, function(err, result) {  // Compare // if passwords match
            console.log(result)
            if (result) {
                
                const token = jwt.sign({id:newUser.id ,name:newUser.name ,email:newUser.email},process.env.JWT_SECRET, { expiresIn: '15m' });
                return res.json({token:token});

            }
            // if passwords do not match
            else {
                return res.status(401).json({message:"wrong password"});
            }

        });



    }




}