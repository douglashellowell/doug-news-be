import express from 'express';
import { getRootApiMessage } from './controllers/app.controller';

const app = express();

app.get('/', getRootApiMessage);

export default app;
