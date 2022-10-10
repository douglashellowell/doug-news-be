import { RequestHandler } from 'express';

export const getRootApiMessage: RequestHandler = (req, res, next) => {
  res
    .status(200)
    .send({
      msg: 'Welcome to the API, please go to /api to view available endpoints',
    });
};
