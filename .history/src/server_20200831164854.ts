import 'reflect-metadata';
import express from 'express';
// src/server.ts
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();
app.use(express.json());
app.use(routes);
app.use('/files', express.static(uploadConfig.directory));

app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log(' Server started on port 3333! =D');
});
