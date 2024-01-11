import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import usersRoute from './routes/users.routes';
import { handleErrors } from './errors';
import loginRoute from './routes/login.routes';
import contactRoute from './routes/contact.routes';
import cors from 'cors';

const app: Application = express();
app.use(express.json());
app.use(
  cors()
);

app.use('/users', usersRoute);
app.use('/login', loginRoute);
app.use('/contacts', contactRoute);

app.use(handleErrors);
export default app;
