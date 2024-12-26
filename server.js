const express = require('express');
const bodyParser = require('body-parser');
const placesRoutes = require('./routes/places-routes');

const server = express();
server.use(bodyParser.json());

server.use(placesRoutes);

server.listen(3000, () => {
  console.log("Server is running on port 3000: Hello binh tom");
});