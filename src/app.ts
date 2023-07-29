import 'express-async-errors';
import 'reflect-metadata';

import express, { Application } from 'express';
import usersRoute from './routes/users.routes';

const app: Application = express();
app.use(express.json());

app.use('/users', usersRoute);

export default app;
