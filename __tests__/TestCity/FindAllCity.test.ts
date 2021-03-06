import request from 'supertest';
import { app } from '../../src/app';

describe('Find the city', () => {
  it('returns status 200', async () => {
    const cityMock = {
      city: 'Porto Alegre',

      state: 'RS'
    };

    const response = await request(app).get('/city').send(cityMock);
    expect(response.statusCode).toEqual(200);
  });
  it('Bad request ', async () => {
    const city = {
      city: 'Pelotas',

      state: 'RS'
    };

    await request(app).post('/city').send(city);
    const res = await request(app).get('/city/');
    const { status } = res;
    expect(status).toEqual(400);
  });
});
