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
    expect(response1.body).toHaveProperty('id');
    const upClient = {
      name: 'Pedro Cosby ',
      gender: 'M',
      birthdate: '1980/02/14',
      cityId: `${resCity.body.id}`
    };
    const response2 = await request(app).put(`/client/${response.body.id}`).send(upClient);

    expect(response2.statusCode).toEqual(200);
  });
  it('returns status bad request', async () => {
    const cityMock = {
      city: 'Porto Alegre',

      state: 'RS'
    };

    const resCity = await request(app).post('/city/').send(cityMock);

    const clientMock = {
      name: 'Barbara',

      gender: 'F',

      city_home: `${resCity.body.id}`,

      birthdate: '11/10/1995'
    };

    const create = await request(app).post('/client/').send(clientMock);

    await request(app).get(`/client/${create.body.id}`);

    const clientUPMock = {
      name: 'Tuco',

      gender: 'M',

      city_home: `${resCity.body.id}`
    };
    const response = await request(app)
      .put(`/client/${'4a271b3e-2c2e-477f-ab58-4a5ebc35dec1'}`)

      .send(clientUPMock);

    expect(response.body).toEqual({ message: 'incorrect id' });
  });
});
