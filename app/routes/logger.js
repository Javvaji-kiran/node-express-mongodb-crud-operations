// Initialise logger
var winston = require('winston');
var winstonExRegLogger = require("winston-express-request-logger");
const logger = winstonExRegLogger.createLogger({
    transports: [
        new (winston.transports.File)({
            filename: 'knugget-service.log',
            handleExceptions: true,
            timestamp:true,
            level:"info"
        }),
        new (winston.transports.Console)({
            handleExceptions: true,
            timestamp: true,
            level:"info"
        })
    ],
    exitOnError: false
});
module.exports=logger