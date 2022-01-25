import request from 'supertest';
import { app } from '../../src/app';

describe('Find the customer!', () => {
  it('returns status 200', async () => {
    const cityMock = {
      city: 'Passo Fundo',

      state: 'RS'
    };

    const resCity = await request(app).get('/city').send(cityMock);
    const clientMock = {
      name: 'Ana Maria Braga ',
      gender: 'F',
      birthdate: '1980/02/14',
      cityId: `${resCity.body.id}`
    };
    const response = await request(app).get('/client').send(clientMock);

    const { status } = response;

    expect(status).toEqual(200);
  });
  it('returns status 200', async () => {
    const cityMock = {
      city: 'Passo Fundo',

      state: 'RS'
    };

    const resCity = await request(app).get('/city').send(cityMock);
    const clientMock = {
      name: 'Ana Maria Braga ',
      gender: 'F',
      birthdate: '2000/01/01',
      cityId: `${resCity.body.id}`
    };
    const response = await request(app).get('/client/?birthdate=2000/01/01').send(clientMock);

    const { status } = response;

    expect(status).toEqual(200);
  });
});
