import request from 'supertest';
import { app } from '../../src/app';

describe('Remove city', () => {
  it('returns status 204', async () => {
    const cityMock = {
      city: 'Porto Alegre',

      state: 'RS'
    };

    const response1 = await request(app).post('/city').send(cityMock);
    const response2 = await request(app).delete(`/city/${response1.body.id}`);

    expect(response2.statusCode).toEqual(204);
  });
});
