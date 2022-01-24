import request from 'supertest';
import { app } from '../../src/app';

describe('create client', () => {
  it('returns status 201', async () => {
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
    const response = await request(app).post('/client').send(clientMock);
    const response1 = await request(app).get(`/client/${response.body.id}`);

    expect(response1.statusCode).toEqual(200);
  });
});
