import request from 'supertest';
import { app } from '../../src/app';

describe('create client', () => {
  it('returns status 201', async () => {
    const cityMock = {
      city: 'Gramado',

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

    const { status, body } = response;

    expect(status).toEqual(201);
    expect(body).toHaveProperty('id');
  });

  it('returns bad request ', async () => {
    const city = {
      name: ' ',
      gender: 'F',
      birthdate: '14/12/1980',
      cityId: '049ae653-1e80-451d-92d8-50a476632139',
      age: 41
    };

    const res = await request(app).post('/city').send(city);

    expect(res.statusCode).toEqual(400);
  });

  it('returns bad request ', async () => {
    const city = {
      name: 'Joaozinho do teste ',
      gender: 'F',
      birthdate: '2000/12/07',
      cityId: ' ',
      age: 41
    };

    const res = await request(app).post('/city').send(city);

    expect(res.statusCode).toEqual(400);
  });
});
