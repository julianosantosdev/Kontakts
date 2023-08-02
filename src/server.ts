import AppDataSource from './data-source';
import app from './app';

AppDataSource.initialize()
  .then(() => {
    console.log('Server started');
    const port: number = 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
