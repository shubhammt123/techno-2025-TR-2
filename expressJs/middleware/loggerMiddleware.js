const fs = require("fs");

const loggerMiddleware = (req,res,next)=>{
    let date = new Date();
    let log = `${req.url} - ${date.toLocaleDateString()}\n`
    fs.appendFileSync("logger.text",log)
    next();
}

module.exports = loggerMiddleware;