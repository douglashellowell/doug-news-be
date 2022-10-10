import request from 'supertest';
import { describe, expect, test } from 'vitest';
import app from '../app/app';

describe('ENDPOINTS', () => {
  describe('/', () => {
    test('GET - 200 | responds with welcome instruction', async () => {
      const res = await request(app).get('/').expect(200);

      expect(res.body.msg).toBe(
        'Welcome to the API, please go to /api to view available endpoints'
      );
    });
  });
});
