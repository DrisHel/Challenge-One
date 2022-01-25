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

  it('Not Found ', async () => {
    const resp = await request(app).delete('/city/04e966c9-88e0-442b-9802-397ca310d134');

    expect(resp.body).toEqual({
      description: 'Not found',

      message: 'The ID: [object Object] was not found',

      statusCode: 404
    });
  });
});
