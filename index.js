const express = require('express'); //usamos express
const routerApi = require('./routes'); //usamos express
const passport = require('passport');
const cors = require('cors'); //usamo cors
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
require('./utils/auth');

//proteger con cors
/* const whitelist = ['http://localhost:8080/','http://127.0.0.1.5500/'] // son los mismos (si pego los links platzi me impide comentar)
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) !== 1) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'), false);
    }
  }
}

app.use(cors(options));
 */

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
});
