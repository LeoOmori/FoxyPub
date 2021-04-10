const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = {

    /// store new users
    store(req, res, next){

        const { email ,name ,password } = req.body;

        
        //salt and hash password
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password,salt, async (err,hash) => {

                /// try to save new user
                try{
                    const [newUser, created] = await User.findOrCreate({
                        raw: true,
                        where: {email},
                        defaults: {email ,name ,password: hash }, 
                    });
                    
                    // delete sensitive data from new user
                    delete newUser.password
                    delete newUser.createdAt
                    delete newUser.updatedAt

                    /// check if new user is created
                    if(created){
                        res.json({
                            isCreated: true,
                            newUser
                        })                     
                    }else{            
                        res.json({
                            isCreated: false,
                            newUser
                        })           
                    }

                }
                catch(e){
                    return next(new Error(e))
                }
                    
            });
        });
            
    },

    async show(req ,res ,next){


        const {name} = req.params;

        try{
            const newUser = await User.findOne({where:{name}, raw:true});

            if (newUser === null){
                res.status(404).json({message:"not found"});
            }else{

            }

            // delete sensitive data from new user
            delete newUser.password
            delete newUser.createdAt
            delete newUser.updatedAt     
            //response       
            res.json(newUser);
        }
        catch(e){
            return next(new Error(e));
        }


    }



}