import 'express-async-errors';
import 'reflect-metadata';

import express, { Application } from 'express';
import usersRoute from './routes/users.routes';
import { handleErrors } from './errors';
import loginRoute from './routes/login.routes';
import contactRoute from './routes/contact.routes';

const app: Application = express();
app.use(express.json());

app.use('/users', usersRoute);
app.use('/login', loginRoute);
app.use('/contacts', contactRoute);

app.use(handleErrors);
export default app;
