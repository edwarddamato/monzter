import express from 'express';
import { json, urlencoded } from 'body-parser';
import { buildRoutes } from './routes';
import apiMonzter from './routes/api/getLoginUrl';

const app: express.Express = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Content-Type', 'application/json');
  next();
});

app.use(json());
app.use(urlencoded({ extended: true }));

buildRoutes(app, [apiMonzter]);

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});