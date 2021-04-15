const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { dbConnection } = require('../database/mongoose.config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.routePath = '/api/asteroids';

    // Connect to Database
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    // cors to use Access-Control-Allow-Origin (Browsers)
    this.app.use(cors());

    // Read Express Data
    this.app.use(express.json());

    // Https views
    this.app.use(morgan('dev'));

    // Directorio ficheros Estaticos
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.routePath, require('../routes/asteroids.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
