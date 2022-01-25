import request from 'supertest';
import { app } from '../../src/app';

describe('Find By Id city', () => {
  it('returns status 200', async () => {
    const cityMock = {
      city: 'Porto Alegre',

      state: 'RS'
    };

    const response = await request(app).post('/city').send(cityMock);
    const response1 = await request(app).get(`/city/${response.body.id}`);

    expect(response1.statusCode).toEqual(200);
  });
  it('Bad request ', async () => {
    const iderrado = 12345;
    const city = {
      city: 'Pelotas',

      state: 'RS'
    };

    await request(app).post('/city').send(city);
    const res = await request(app).get(`/city/${iderrado}`);
    const { status } = res;
    expect(status).toEqual(400);
  });
});
