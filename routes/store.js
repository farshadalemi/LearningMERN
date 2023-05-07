const express = require('express'); 
const router = express.Router(); 

router.use(logger)

router.get('/', (req, res) => {
    res.send("Welcome To Store")   
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
  }

module.exports = router;
