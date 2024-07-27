const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp({format:'DD-MM-YYYY HH:MM:SS'}),
    myFormat
  ),
  transports: [new transports.Console(), new transports.File({ filename: 'requests.log' })]
});

module.exports=logger
