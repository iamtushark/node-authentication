const dotenv=require("dotenv");

dotenv.config()

module.exports={
    PORT:process.env.PORT,
    JWT_SECRET : process.env.JWT_SECRET,
    TWILIO_SID : process.env.TWILIO_SID,
    TWILIO_TOKEN : process.env.TWILIO_AUTH_TOKEN,
    TWILIO_EMAIL_SERVICE_SID : process.env.TWILIO_EMAIL_SERVICE_SID
}