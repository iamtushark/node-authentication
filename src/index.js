const express = require("express");
const morgan = require("morgan")
const bodyParser = require('body-parser');
const { serverConfig,logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

// Middleware to log HTTP requests
app.use(morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api',apiRoutes);
app.listen(serverConfig.PORT, () => {
  console.log(`App Listening at PORT:-${serverConfig.PORT}`);
  logger.info("Succcessfully started the server")
});