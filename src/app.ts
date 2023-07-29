import 'express-async-errors';
import 'reflect-metadata';

import express, { Application } from 'express';
import usersRoute from './routes/users.routes';
import { handleErrors } from './errors';

const app: Application = express();
app.use(express.json());

app.use('/users', usersRoute);

app.use(handleErrors);
export default app;
