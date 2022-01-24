import request from 'supertest';
import { app } from '../../src/app';

describe('Remove client!', () => {
  it('returns status 204', async () => {
    const cityMock = {
      city: 'Passo Fundo',

      state: 'RS'
    };

    const resCity = await request(app).post('/city').send(cityMock);
    const clientMock = {
      name: 'Ana Maria Braga ',
      gender: 'F',
      birthdate: '1980/02/14',
      cityId: `${resCity.body.id}`
    };
    const response1 = await request(app).post('/client').send(clientMock);
    const response2 = await request(app).delete(`/client/${response1.body.id}`);

    expect(response2.statusCode).toEqual(204);
  });
});