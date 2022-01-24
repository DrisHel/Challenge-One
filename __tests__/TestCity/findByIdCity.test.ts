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
});
