import request from 'supertest';
import app from '../app.js';

test('app object exists', () => {
  expect(app).toBeDefined();
});

test('GET /hello returns a greeting', async () => {
  const response = await request(app).get('/hello');

  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello from Express');
});

test('GET /bye returns a goodbye', async () => {
  const response = await request(app).get('/bye');

  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Bye from Express');
});