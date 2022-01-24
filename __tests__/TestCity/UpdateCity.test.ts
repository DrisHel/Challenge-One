import request from 'supertest';
import { app } from '../../src/app';

describe('Update city', () => {
  it('returns status 200', async () => {
    const cityMock = {
      city: 'Porto Alegre',

      state: 'RS'
    };

    const response = await request(app).post('/city').send(cityMock);
    const response1 = await request(app).get(`/city/${response.body.id}`);
    expect(response1.body).toHaveProperty('id');
    const upCity = {
      city: 'Alegrete',
      state: 'Rs'
    };
    const response2 = await request(app).put(`/city/${response.body.id}`).send(upCity);

    expect(response2.statusCode).toEqual(200);
  });
});
