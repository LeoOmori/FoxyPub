require('dotenv').config()
const express = require('express');

const app = express();


// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/", require("./routers"));


//404 - NOT FOUND
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404; 
    next(err);
})

// EXCEPTION ROUTES
app.use((err,req,res, next) => {
    res.status(err.status || 500);
    if(err.status != 404) console.warn("Error: ", err.message, new Date() );
    res.json({ errors: { message: err.message, status: err.status} } ); 

})







app.listen('3333', () => {
    console.log('server on');
})