import request from 'supertest';
import { app } from '../../src/app';

describe('create client', () => {
  it('returns status 201', async () => {
    const cityMock = {
      city: 'Porto Alegre',

      state: 'RS'
    };

    const response = await request(app).post('/city').send(cityMock);

    expect(response.statusCode).toEqual(201);

    expect(response.body).toHaveProperty('id');
  });

  it('returns bad request ', async () => {
    const cityMock = {
      city: 'Pelotas',

      state: 'rs'
    };

    const res = await request(app).post('/city').send(cityMock);

    expect(res.statusCode).toEqual(400);
  });

  it('Bad request ', async () => {
    const cityMock = {
      city: ' ',

      state: 'rs '
    };

    const res = await request(app).post('/city').send(cityMock);

    expect(res.statusCode).toEqual(400);
  });
  it('Bad request ', async () => {
    const cityMock = {
      city: 'Rio Grande',

      state: ' '
    };

    const res = await request(app).post('/city').send(cityMock);

    expect(res.statusCode).toEqual(400);
  });
  it('Bad request ', async () => {
    const cityMock = {
      city: 102030,

      state: 10
    };

    const res = await request(app).post('/city').send(cityMock);

    expect(res.statusCode).toEqual(400);
  });
});
